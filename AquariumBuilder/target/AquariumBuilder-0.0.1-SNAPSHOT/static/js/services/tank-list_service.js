'use strict';

angular.module('myApp').factory('tankListService', tankListService);

tankListService.$inject = [ '$http' ];

function tankListService($http) {
var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllTanks : fetchAllTanks,
		createTank : createTank,
		updateTank : updateTank
	};

	return factory;

	function fetchAllTanks() {
//		return $http.get(baseURI + 'tank-list/');
		console.log(baseURI);
		console.log(baseURI + "tanks");
		// this code gives me ng-repeat dupe error
		return $http.get(baseURI + "tanks").then(function(response) {
			console.log("This is tank service response: ");
			console.log(response);
			return response.data;
		})
	}

	function createTank(tank) {
		return $http.post(baseURI + 'tank-list/', tank);
	}

	function updateTank(tank, id) {
		return $http.put(baseURI + 'tank-list/', id, tank);
	}
};
