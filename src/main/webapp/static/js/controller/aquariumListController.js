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

	// vm.submit = submit;
	vm.edit = edit;
	vm.remove = remove;
	vm.reset = reset;
	vm.update = update;
	vm.view = view;

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
					console
						.error('Error while fetching Aquarium');
				});
	}

	function fetchAquariumById(aquariumId) {
		aquariumListService.fetchAquariumById(aquariumId);
	}

	// function createAquarium(aquarium) {
	// 	aquariumListService.createAquarium(aquarium)
	// 		.then(fetchAllAquariums);
	// }

	function updateAquarium(aquarium, aquariumId) {
		console.log(aquariumId);
		aquariumListService
			.updateAquarium(aquarium, aquariumId)
			.then(
				fetchAllAquariums,
				function (errResponse) {
					console
						.error('Error while updating aquarium');
				});
	}

	function deleteAquarium(aquariumId) {
		aquariumListService.deleteAquarium(aquariumId).then(
			fetchAllAquariums);
	}

	// function submit() {
	// 	if (vm.aquarium.aquariumId === null) {
	// 		console.log('Saving New aquarium',
	// 			vm.aquarium);
	// 		createAquarium(vm.aquarium);
	// 	} else {
	// 		updateAquarium(vm.aquarium,
	// 			vm.aquarium.aquariumId);
	// 		console.log('aquarium updated with aquariumId ',
	// 			vm.aquarium.aquariumId);
	// 	}
	// 	reset();
	// }

	function update() {
		updateAquarium(vm.aquarium, vm.aquarium.aquariumId);
		reset();
	}

	function view(aquariumId) {
		//TODO route this to aquaurium details page with id
		fetchAquariumById(aquariumId);
	}

	function edit(aquariumId) {
		console.log('aquariumId to be edited' + aquariumId);
		for (var i = 0; i < vm.aquariums.length; i++) {
			if (vm.aquariums[i].aquariumId === aquariumId) {
				vm.aquarium = angular
					.copy(vm.aquariums[i]);
				vm.aquarium.date = new Date(
					vm.aquarium.date);
			}
		}
	}

	function remove(aquariumId) {
		console.log('aquariumId to be deleted', aquariumId);
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