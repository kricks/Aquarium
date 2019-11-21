'use strict';

angular.module('myApp').factory('aquariumListService', aquariumListService);

aquariumListService.$inject = [ '$http' ];

function aquariumListService($http) {
var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllAquariums : fetchAllAquariums,
		createAquarium : createAquarium,
		updateAquarium : updateAquarium
	};

	return factory;

	function fetchAllAquariums() {
//		return $http.get(baseURI + 'aquarium-list/');
		console.log(baseURI);
		console.log(baseURI + "aquariums");
		// this code gives me ng-repeat dupe error
		return $http.get(baseURI + "aquariums").then(function(response) {
			console.log("This is aquarium service response: ");
			console.log(response);
			return response.data;
		})
	}

	function createAquarium(aquarium) {
		return $http.post(baseURI + 'aquarium-list/', aquarium);
	}

	function updateAquarium(aquarium, id) {
		return $http.put(baseURI + 'aquarium-list/', id, aquarium);
	}
};
