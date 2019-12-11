'use strict';

angular
	.module('myApp')
	.controller('livestockController', livestockController);
livestockController.$inject = ['livestockService', '$window'];

function livestockController(livestockService) {

	var self = this;

	self.livestock = {
		livestockId: null,
		name: undefined,
		species: undefined,
		gender: 'Male',
		notes: undefined
	};

	self.livestocks = [];

	self.edit = edit;
	self.remove = remove;
	self.reset = reset;
	self.update = update;

	fetchAllLivestock();

	function fetchAllLivestock() {
		livestockService
			.fetchAllLivestock()
			.then(
				function (d) {
					self.livestocks = d;
					return d;
				},
				function (errResponse) {
					console
						.error('Error while fetching Livestock');
				});
	}


	// function createLivestock(livestock) {
	// 	livestockService.createLivestock(livestock)
	// 		.then(fetchAllLivestock);
	// }

	function updateLivestock(livestock, livestockId) {
		livestockService
			.updateLivestock(livestock, livestockId)
			.then(
				fetchAllLivestock,
				function (errResponse) {
					console
						.error('Error while updating livestock');
				});
	}

	function deleteLivestock(livestockId) {
		livestockService.deleteLivestock(livestockId)
			.then(fetchAllLivestock);
	}

	function update() {
			updateLivestock(self.livestock,
				self.livestock.livestockId);
			console
				.log(
					'livestock updated with livestockId ',
					self.livestock.livestockId);
		reset();
	}

	function edit(livestockId) {
		console.log('livestockId to be edited ' +
			livestockId);
		for (var i = 0; i < self.livestocks.length; i++) {
			if (self.livestocks[i].livestockId === livestockId) {
				self.livestock = angular
					.copy(self.livestocks[i]);
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
			name: undefined,
			species: undefined,
			gender: 'Male',
			notes: undefined
		};
	}

}
