'use strict';

angular.module('myApp').controller('aquariumListController', ['$scope','aquariumListService',
        function($scope, aquariumListService) {

            var self = this;
            self.aquariums = [];

            self.submit = submit;
            self.reset = reset;

            fetchAllAquariums();

            function fetchAllAquariums() {
            	aquariumListService.fetchAllAquariums().then(function(d) {
                    self.aquariums = d;
                    return d;
                }, function(errResponse) {
                    console.error('Error while fetching Aquarium');
                });
            }

            function createAquarium(aquarium) {
            	aquariumListService.createAquarium(aquarium).then(fetchAllAquariums,
                    function(errResponse) {
                        console.error('Error while creating Aquarium');
                    });
            }
            
            function submit() {
                    console.log('Saving New Aquarium', self.aquarium);
                    createAquarium(self.aquarium);
                
                reset();
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