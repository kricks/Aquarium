'use strict';

angular.module('myApp').factory('tankListService', tankListService);

tankListService.$inject = [ '$http' ];

function tankListService($http) {
var baseURI = '/AquariumBuilder/';

	var data = {
		fetchAllTanks : fetchAllTanks,
		createTank : createTank
	};

	return data;

	function fetchAllTanks() {
		return $http.get(baseURI + "tanks").then(function(response) {
			return response.data;
		})
	}

	function createTank(tank) {
		return $http.post(baseURI + "tanks/tank", tank);
		console.log("This is create: " + tank);
	}
};
