'use strict';

angular
	.module('myApp')
	.controller('aquariumListController', aquariumListController);
aquariumListController.$inject = ['aquariumListService', '$log'];

function aquariumListController(aquariumListService, $log) {
	var vm = this;

	vm.aquarium = {
		aquariumId: null,
		name: undefined,
		type: 'Fresh Water',
		gallon: undefined,
		notes: undefined,
		date: null
	};

	vm.aquariums = [];

	vm.edit = edit;
	vm.remove = remove;
	vm.reset = reset;
	vm.update = update;

	fetchAllAquariums();

	function fetchAllAquariums() {
		aquariumListService
			.fetchAllAquariums()
			.then(
				function (d) {
					vm.aquariums = d;
					return d;
				},
				function (errResponse) {
					$log.error('Error while fetching Aquarium');
				});
	}

	function updateAquarium(aquarium, aquariumId) {
		$log.info(aquariumId);
		aquariumListService
			.updateAquarium(aquarium, aquariumId)
			.then(
				fetchAllAquariums,
				function (errResponse) {
					$log.error('Error while updating aquarium');
				});
	}

	function deleteAquarium(aquariumId) {
		aquariumListService.deleteAquarium(aquariumId)
		.then(fetchAllAquariums,
				function (errResponse) {
			$log.error('Error while deleting aquarium');
		});
	}

	function update() {
		updateAquarium(vm.aquarium, vm.aquarium.aquariumId);
		reset();
	}

	function edit(aquariumId) {
		$log.info('aquariumId to be edited' + aquariumId);
		for (var i = 0; i < vm.aquariums.length; i++) {
			if (vm.aquariums[i].aquariumId === aquariumId) {
				vm.aquarium = angular.copy(vm.aquariums[i]);
			}
		}
	}

	function remove(aquariumId) {
		$log.info('AquariumId to be deleted', aquariumId);
		deleteAquarium(aquariumId);
	}

	function reset() {
		vm.aquarium = {
			aquariumId: null,
			name: undefined,
			type: 'Fresh Water',
			gallon: undefined,
			notes: undefined,
			date: null
		};
	}

}