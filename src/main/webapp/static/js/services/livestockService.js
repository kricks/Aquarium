'use strict';

angular.module('myApp').factory('livestockService', livestockService);

livestockService.$inject = ['$http', '$log'];

function livestockService($http, $log) {
	var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllLivestock: fetchAllLivestock,
		updateLivestock: updateLivestock,
		deleteLivestock: deleteLivestock,
		fetchAllLivestockByAquariumId : fetchAllLivestockByAquariumId
	};

	return factory;

	function fetchAllLivestock() {
		return $http.get(baseURI + "livestocks").then(function (response) {
			return response.data;
		});
	}

	function updateLivestock(livestock, livestockId) {
		return $http.put(baseURI + 'livestocks/update/' + livestockId, livestock).then(function (response) {
			return (response.data);
		});
	}

	function deleteLivestock(livestockId) {
		return $http.delete(baseURI + 'livestocks/delete/' + livestockId).then(function (response) {
				return response.data;
			},
			function (errResponse) {
				// $log('Error while deleting Livestock');
			});
	}

	function fetchAllLivestockByAquariumId(aquariumId) {
		return $http.get(baseURI + 'livestocks/aq/' + aquariumId)
		.then(function (response) {
				return response.data;
			},
			function (errResponse) {
				// $log('Error while fetching livestock by aquariumID');
			});
	}

}
