'use strict';

angular.module('myApp').factory('aquariumListService', aquariumListService);

aquariumListService.$inject = ['$http', '$log'];

function aquariumListService($http, $log) {
	var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllAquariums: fetchAllAquariums,
		updateAquarium: updateAquarium,
		deleteAquarium: deleteAquarium
	};

	return factory;

	function fetchAllAquariums() {
		return $http.get(baseURI + "aquariums").then(function (response) {
			return response.data;
		});
	}

	function updateAquarium(aquarium, aquariumId) {
		return $http.put(baseURI + 'aquariums/update/' + aquariumId, aquarium).then(function (response) {
			return (response.data);
		});
	}

	function deleteAquarium(aquariumId) {
		return $http.delete(baseURI + 'aquariums/delete/' + aquariumId).then(function (response) {
			return response.data;
		},
			function (errResponse) {
				$log.error('Error while deleting Aquarium');
			});
	}
}
