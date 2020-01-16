'use strict';

angular.module('myApp').controller('livestockController', livestockController);
livestockController.$inject = [ 'livestockService', '$log' ];

function livestockController(livestockService, $log) {

	var vm = this;

	vm.livestock = {
		livestockId : null,
		fkAquariumId : null,
		name : undefined,
		species : undefined,
		gender : 'Male',
		notes : undefined
	};

	vm.livestocks = [];

	vm.submit = submit;
	vm.edit = edit;
	vm.remove = remove;
	vm.reset = reset;
	vm.init = init;

	function init(fkAquariumId) {
		fetchAllLivestockByAquariumId(fkAquariumId);
	}

	function fetchAllLivestockByAquariumId(fkAquariumId) {
		livestockService.fetchAllLivestockByAquariumId(fkAquariumId).then(
				function(d) {
					vm.livestocks = d;
				}, function(errResponse) {
					$log.error('Error while fetching Livestock');
				});
	}

	function createLivestock(livestock) {
		livestockService.createLivestock(livestock).then(
				fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId));
		$log.info("this is create fetch " + vm.livestock.fkAquariumId);
	}

	function updateLivestock(livestock, livestockId) {
		livestockService.updateLivestock(livestock, livestockId).then(
				fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId),
				function(errResponse) {
					$log.error('Error while updating livestock');
				});
	}

	function deleteLivestock(livestockId) {
		livestockService.deleteLivestock(livestockId).then(
				fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId));
		$log.info("fkAquariumId " + vm.livestock.fkAquariumId);
		fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId);
	}

	function submit(fkAquariumId) {
		if (vm.livestock.livestockId === null) {
			vm.livestock.fkAquariumId = fkAquariumId;
			createLivestock(vm.livestock);
			$log.info('Saving New livestock');
			fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId);
		} else {
			updateLivestock(vm.livestock, vm.livestock.livestockId);
			$log.info('aquarium updated with fkAquariumId '
					+ vm.livestock.livestockId);
			fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId);
		}
		fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId);
		reset();
	}

	function edit(livestock) {
		$log.info('livestockId to be edited ' + livestock);
		vm.livestock = angular.copy(livestock);
	}

	function remove(livestockId, fkAquariumId) {
		vm.livestock.fkAquariumId = fkAquariumId;
		$log.info('livestockId to be deleted', livestockId);
		$log.info('fkAquariumId to be deleted', fkAquariumId);
		deleteLivestock(livestockId);
		fetchAllLivestockByAquariumId(vm.livestock.fkAquariumId);
	}

	function reset() {
		vm.livestock = {
			livestockId : null,
			fkAquariumId : null,
			name : undefined,
			species : undefined,
			gender : 'Male',
			notes : undefined
		};
	}

}
