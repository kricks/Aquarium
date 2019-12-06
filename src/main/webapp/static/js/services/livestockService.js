'use strict';

angular.module('myApp').factory('livestockService', livestockService);

livestockService.$inject = [ '$http' ];

	function livestockService($http) {
		var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllLivestock : fetchAllLivestock,
		createLivestock : createLivestock,
		updateLivestock: updateLivestock,
		deleteLivestock : deleteLivestock
	};

	return factory;

	function fetchAllLivestock() {
		return $http.get(baseURI + "livestocks").then(function(response) {
			return response.data;
		});
	}

	function createLivestock(livestock) {
		console.log("This is create: " + livestock);
		return $http.post(baseURI + 'livestocks/create', livestock);
	}
	
	function updateLivestock(livestock, livestockId) {
        return $http.put(baseURI + 'livestocks/update/' + livestock, livestockId).then(function (response) {
                return (response.data);
            });
    }
	
	function deleteLivestock(livestockId) {
        return $http.delete(baseURI + 'livestocks/delete/' + livestockId).then(function (response) {
                return response.data;
            },
            function(errResponse){
                console.error('Error while deleting Livestock');
            });
    }
};
