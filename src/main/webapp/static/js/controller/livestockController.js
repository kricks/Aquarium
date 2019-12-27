'use strict';

angular
	.module('myApp')
	.controller('livestockController', livestockController);
livestockController.$inject = ['livestockService', 'aquariumListService', '$log', '$scope'];

function livestockController(livestockService, $log) {

	var vm = this;

	vm.livestock = {
		livestockId: null,
		fkAquariumId: null,
		name: undefined,
		species: undefined,
		gender: 'Male',
		notes: undefined
	};

	vm.livestocks = [];

	vm.submit = submit;
	vm.edit = edit;
	vm.remove = remove;
	vm.reset = reset;
	vm.init = init;

	function init(fkAquariumId) {
		fetchAllLivestockByAquariumId(fkAquariumId);
		getLivestockByPkAquariumId();
	}

	function fetchAllLivestockByAquariumId(fkAquariumId) {
		livestockService
			.fetchAllLivestockByAquariumId(fkAquariumId)
			.then(
				function (d) {
					console.log("1");
					vm.livestocks = d;
					return d;
				},
				function (errResponse) {
					console
						.error('Error while fetching Livestock');
				});
	}

	function updateLivestock(livestock, livestockId) {
		console.log("2");
		console.log("hello livestockid" + vm.livestock.livestockId);
		livestockService
			.updateLivestock(livestock, livestockId)
			.then(
				fetchAllLivestockByAquariumId(vm.fkAquariumId),
				function (errResponse) {
					console
						.error('Error while updating livestock');
				});
	}

	function deleteLivestock(livestockId) {
		livestockService.deleteLivestock(livestockId)
			.then(fetchAllLivestockByAquariumId);
	}

	function createLivestock(livestock) {
		livestockService.createLivestock(livestock)
			.then(fetchAllLivestockByAquariumId);
	}

	function submit(fkAquariumId) {
		if (vm.livestock.livestockId === null) {
			console.log('Saving New aquarium',
				vm.livestock);
			vm.livestock.fkAquariumId = fkAquariumId;
			createLivestock(vm.livestock);
		} else {
			updateLivestock(vm.livestock,
				vm.livestock.livestockId);
			console.log('aquarium updated with fkAquariumId ',
				vm.livestock.livestockId);
		}
		reset();
	}

	function edit(livestockId, fkAquariumId) {
		console.log('livestockId to be edited ' +
			livestockId);
		for (var i = 0; i < vm.livestocks.length; i++) {
			if (vm.livestocks[i].livestockId === livestockId) {
				vm.livestock = angular.copy(vm.livestocks[i]);
			}
		}
	}

	function remove(livestockId) {
		console.log('livestockId to be deleted',
			livestockId);
		deleteLivestock(livestockId);
	}

	function reset() {
		vm.livestock = {
			livestockId: null,
			fkAquariumId: null,
			name: undefined,
			species: undefined,
			gender: 'Male',
			notes: undefined
		};
	}

}
