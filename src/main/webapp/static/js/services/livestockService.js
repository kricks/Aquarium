'use strict';

angular.module('myApp').factory('livestockService', livestockService);

livestockService.$inject = ['$http'];

function livestockService($http) {
	var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllLivestock: fetchAllLivestock,
		createLivestock: createLivestock,
		updateLivestock: updateLivestock,
		deleteLivestock: deleteLivestock,
		fetchAllLivestockByAquariumId: fetchAllLivestockByAquariumId
	};

	return factory;

	function fetchAllLivestock() {
		return $http.get(baseURI + "livestock").then(function (response) {
			return response.data;
		});
	}

	function fetchAllLivestockByAquariumId(fkAquariumId) {
		return $http.get(baseURI + 'livestock/aq/' + fkAquariumId)
			.then(function (response) {
				return response.data;
			});
	}

	function createLivestock(livestock) {
		return $http.post(baseURI + 'livestock/create', livestock);
	}

	function updateLivestock(livestock, livestockId) {
		return $http.put(baseURI + 'livestock/update/' + livestockId, livestock)
		 .then(function (response) {
		 	return (response.data);
		 });
	}

	function deleteLivestock(livestockId) {
		return $http.delete(baseURI + 'livestock/delete/' + livestockId).then(function (response) {
			return response.data;
		});
	}
}
