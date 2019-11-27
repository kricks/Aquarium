'use strict';

angular
    .module('myApp')
    .controller(
        'aquariumListController',
        [
            '$scope',
            'aquariumListService',
            function($scope, aquariumListService) {

                var self = this;
                self.aquariums = [];
                
                self.submit = submit;
                self.edit = edit;
                self.remove = remove;

                fetchAllAquariums();

                function fetchAllAquariums() {
                    aquariumListService
                        .fetchAllAquariums()
                        .then(
                            function(d) {
                                self.aquariums = d;
                                return d;
                            },
                            function(errResponse) {
                                console
                                    .error('Error while fetching Aquarium');
                            });
                }

                function createAquarium(aquarium) {
                    aquariumListService
                        .createAquarium(aquarium)
                        .then(
                            fetchAllAquariums,
                            function(errResponse) {
                                console
                                    .error('Error while creating Aquarium');
                            });
                }

                function updateAquarium(aquarium, id) {
                    aquariumListService
                        .updateAquarium(aquarium, id)
                        .then(
                            fetchAllAquariums,
                            function(errResponse) {
                                console
                                    .error('Error while updating aquarium');
                            });
                }

                function remove(id) {
                    console.log('id to be deleted', id);
                    if (self.aquarium.id === id) { //clean form if the aquarium to be deleted is shown there.
                        reset();
                    }
                    deleteAquarium(id);
                }
                
                function deleteAquarium(id) {
                	aquariumListService
                        .deleteAquarium(id)
                        .then(
                            fetchAllAquariums,
                            function(errResponse) {
                                console
                                    .log("error while deleting aquarium");
                            })
                }
                
                function submit() {
                    console.log('Saving New Aquarium',
                        self.aquarium);
                    createAquarium(self.aquarium);
                }

                function edit(id) {
                    console.log('id to be edited', id);
                    for (var i = 0; i < self.aquariums.length; i++) {
                        if (self.aquariums[i].id === id) {
                            self.aquarium = angular
                                .copy(self.aquariums[i]);
                            break;
                        }
                    }
                }

                function reset() {
                    self.aquarium = {
                        id: null,
                        name: '',
                        type: '',
                        gallon: '',
                        notes: ''
                    };
                    $scope.aquariumForm.$setPristine(); //reset Form
                }

            }
        ]);