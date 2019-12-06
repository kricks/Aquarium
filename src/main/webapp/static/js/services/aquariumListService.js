'use strict';

angular.module('myApp').factory('aquariumListService', aquariumListService);

aquariumListService.$inject = [ '$http' ];

	function aquariumListService($http) {
		var baseURI = '/AquariumBuilder/';

	var factory = {
		fetchAllAquariums : fetchAllAquariums,
		createAquarium : createAquarium,
		updateAquarium : updateAquarium,
		deleteAquarium : deleteAquarium
	};

	return factory;

	function fetchAllAquariums() {
		return $http.get(baseURI + "aquariums").then(function(response) {
			return response.data;
		});
	}

	function createAquarium(aquarium) {
		console.log("This is create: " + aquarium);
		return $http.post(baseURI + 'aquariums/create', aquarium);
	}
	
	function updateAquarium(aquarium, id) {
        return $http.put(baseURI + 'aquariums/update/' + id, aquarium).then(function (response) {
                return (response.data);
            });
    }
	
	function deleteAquarium(id) {
        return $http.delete(baseURI + 'aquariums/delete/' + id).then(function (response) {
                return response.data;
            },
            function(errResponse){
                console.error('Error while deleting Aquarium');
            });
    }
};
