'use strict';

angular
	.module('myApp')
	.controller('livestockController', livestockController);
livestockController.$inject = ['livestockService', 'aquariumListService', '$log'];

function livestockController(livestockService, aquariumListService, $log) {

	var self = this;

	self.livestock = {
		livestockId: null,
		aquariumId: 83,
		name: undefined,
		species: undefined,
		gender: 'Male',
		notes: undefined
	};

	self.livestocks = [];
	self.aquariums = [];

	self.submit = submit;
	self.edit = edit;
	self.remove = remove;
	self.reset = reset;
	self.init = init;

	function init(aquariumId) {
		fetchAllLivestockByAquariumId(aquariumId);
		fetchAquariumById(aquariumId);
	}


	function fetchAllLivestockByAquariumId(aquariumId) {
		livestockService
			.fetchAllLivestockByAquariumId(aquariumId)
			.then(
				function (d) {
					console.log("1");
					self.livestocks = d;
					return d;
				},
				function (errResponse) {
					console
						.error('Error while fetching Livestock');
				});
	}

	function fetchAquariumById(aquariumId) {
		aquariumListService.fetchAquariumById(aquariumId);
	}

	function updateLivestock(livestock, livestockId) {
		console.log("2");
		console.log("hello livestockid" + self.livestock.livestockId);
		livestockService
			.updateLivestock(self.livestock, self.livestock.livestockId)
		.then(
			fetchAllLivestockByAquariumId(self.livestock.aquariumId),
			function (errResponse) {
				console
					.error('Error while updating livestock');
			});
	}

	function deleteLivestock(livestockId) {
		livestockService.deleteLivestock(livestockId)
			.then(fetchAllLivestockByAquariumId);
	}

	/* function update() {
		updateLivestock(self.livestock, self.livestock.livestockId);
		console.log('livestock updated with livestockId ', self.livestock.livestockId);
		console.log(self.livestock);
		init(self.livestock.aquariumId);
		reset();
	} */

	function createLivestock(livestock) {
		livestockService.createLivestock(livestock)
			.then(fetchAllLivestockByAquariumId);
	}

	function submit() {
		if (self.livestock.livestockId === null) {
			console.log('Saving New aquarium',
				self.livestock);
			createLivestock(self.livestock);
		} else {
			updateLivestock(self.livestock,
				self.livestock.livestockId);
			console.log('aquarium updated with aquariumId ',
				self.livestock.livestockId);
		}
		reset();
	}

	function edit(livestockId, aquariumId) {
		console.log('livestockId to be edited ' +
			livestockId);
		for (var i = 0; i < self.livestocks.length; i++) {
			if (self.livestocks[i].livestockId === livestockId) {
				self.livestock = angular.copy(self.livestocks[i]);
			}
		}
	}

	function remove(livestockId) {
		console.log('livestockId to be deleted',
			livestockId);
		deleteLivestock(livestockId);
	}

	function reset() {
		self.livestock = {
			livestockId: null,
			aquariumId: 83,
			name: undefined,
			species: undefined,
			gender: 'Male',
			notes: undefined
		};
	}

}
