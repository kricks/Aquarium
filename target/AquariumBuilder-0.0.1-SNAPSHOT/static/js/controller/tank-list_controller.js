'use strict';

angular.module('myApp').controller(
    'AquariumListController', ['$scope','aquariumListService',
        function($scope, aquariumListService) {

            var self = this;
            self.aquariums = [];

            self.submit = submit;
            self.edit = edit;
            self.reset = reset;

            fetchAllAquariums();

            function fetchAllAquariums() {
            	aquariumListService.fetchAllAquariums().then(function(d) {
                    self.aquariums = d;
                    return d;
                }, function(errResponse) {
                    console.error('Error while fetching Aquariums');
                });
            }

            function createAquarium(aquarium) {
            	aquariumListService.createAquarium(aquarium).then(fetchAllAquariums,
                    function(errResponse) {
                        console.error('Error while creating Aquarium');
                    });
            }

            function updateAquarium(aquarium, id) {
            	aquariumListService.updateAquarium(aquarium, id).then(
                    fetchAllAquariums,
                    function(errResponse) {
                        console.error('Error while updating Aquarium');
                    });
            }

            function submit() {
                if (self.aquarium.id === null) {
                    console.log('Saving New TAnk', self.aquarium);
                    createAquarium(self.aquarium);
                } else {
                    updateAquarium(self.aquarium, self.aquarium.id);
                    console.log('aquarium updated with id ', self.aquarium.id);
                }
                reset();
            }

            function edit(id) {
                console.log('id to be edited', id);
                for (var i = 0; i < self.aquariums.length; i++) {
                    if (self.aquariums[i].id === id) {
                        self.aquarium = angular.copy(self.aquariums[i]);
                        break;
                    }
                }
            }

            function reset() {
                self.aquarium = {
                    id: null,
                    name: '',
                    type: '',
                    gallons: '',
                    notes: ''
                };
                $scope.aquariumForm.$setPristine();
            }

        }
    ]);