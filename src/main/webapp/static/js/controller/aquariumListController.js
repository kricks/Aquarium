'use strict';

angular
	.module('myApp')
	.controller('aquariumListController', ['aquariumListService', function (aquariumListService) {

		var self = this;

		self.aquarium = {
			aquariumId: null,
			name: undefined,
			type: 'Fresh Water',
			gallon: undefined,
			notes: undefined,
			date: null
		};

		self.aquariums = [];

		self.submit = submit;
		self.edit = edit;
		self.remove = remove;
		self.reset = reset;

		fetchAllAquariums();

		function fetchAllAquariums() {
			aquariumListService
				.fetchAllAquariums()
				.then(
					function (d) {
						self.aquariums = d;
						return d;
					},
					function (errResponse) {
						console
							.error('Error while fetching Aquarium');
					});
		}

		function createAquarium(aquarium) {
			aquariumListService.createAquarium(aquarium)
				.then(fetchAllAquariums);
		}

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

		function submit() {
			if (self.aquarium.aquariumId === null) {
				console.log('Saving New aquarium',
					self.aquarium);
				createAquarium(self.aquarium);
			} else {
				updateAquarium(self.aquarium,
					self.aquarium.aquariumId);
				console.log('aquarium updated with aquariumId ',
					self.aquarium.aquariumId);
			}
			reset();
		}

		function edit(aquariumId) {
			console.log('aquariumId to be edited' + aquariumId);
			for (var i = 0; i < self.aquariums.length; i++) {
				if (self.aquariums[i].aquariumId === aquariumId) {
					self.aquarium = angular
						.copy(self.aquariums[i]);
					self.aquarium.date = new Date(
						self.aquarium.date);
				}
			}
		}

		function remove(aquariumId) {
			console.log('aquariumId to be deleted', aquariumId);
			deleteAquarium(aquariumId);
		}

		function reset() {
			self.aquarium = {
				aquariumId: null,
				name: undefined,
				type: 'Fresh Water',
				gallon: undefined,
				notes: undefined,
				date: null
			};
		}

	}]);