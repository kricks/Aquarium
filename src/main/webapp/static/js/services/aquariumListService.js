'use strict';

angular.module('myApp').factory('aquariumListService', aquariumListService);

aquariumListService.$inject = [ '$http' ];

	function aquariumListService($http) {
		var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllAquariums : fetchAllAquariums,
		createAquarium : createAquarium
	};

	return factory;

	function fetchAllAquariums() {
		return $http.get(baseURI + "aquariums").then(function(response) {
			return response.data;
		})
	}

	function createAquarium(aquarium) {
		return $http.post(baseURI + "aquariums/aquarium", aquarium);
		console.log("This is create: " + aquarium);
	}
};
