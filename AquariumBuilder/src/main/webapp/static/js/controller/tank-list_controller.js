'use strict';

angular.module('myApp').controller('tankListController', ['$scope','tankListService',
        function($scope, tankListService) {

            var self = this;
            self.tanks = [];

            self.submit = submit;
            self.reset = reset;

            fetchAllTanks();

            function fetchAllTanks() {
            	tankListService.fetchAllTanks().then(function(d) {
                    self.tanks = d;
                    return d;
                }, function(errResponse) {
                    console.error('Error while fetching Aquarium');
                });
            }

            function createTank(tank) {
            	tankListService.createTank(tank).then(fetchAllTanks,
                    function(errResponse) {
                        console.error('Error while creating Aquarium');
                    });
            }
            
            function submit() {
                    console.log('Saving New Aquarium', self.tank);
                    createTank(self.tank);
                
                reset();
            }


            function reset() {
                self.tank = {
                    id: null,
                    name: '',
                    type: '',
                    gallons: '',
                    notes: ''
                };
                $scope.tankForm.$setPristine();
            }

        }
    ]);