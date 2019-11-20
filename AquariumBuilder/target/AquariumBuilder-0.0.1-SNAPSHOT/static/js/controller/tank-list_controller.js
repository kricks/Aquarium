'use strict';

angular.module('myApp').controller(
    'TankListController', ['$scope','tankListService',
        function($scope, tankListService) {

            var self = this;
            self.tanks = [];

            self.submit = submit;
            self.edit = edit;
            self.reset = reset;

            fetchAllTanks();

            function fetchAllTanks() {
            	tankListService.fetchAllTanks().then(function(d) {
                    self.tanks = d;
                    return d;
                }, function(errResponse) {
                    console.error('Error while fetching Tanks');
                });
            }

            function createTank(tank) {
            	tankListService.createTank(tank).then(fetchAllTanks,
                    function(errResponse) {
                        console.error('Error while creating Tank');
                    });
            }

            function updateTank(tank, id) {
            	tankListService.updateTank(tank, id).then(
                    fetchAllTanks,
                    function(errResponse) {
                        console.error('Error while updating Tank');
                    });
            }

            function submit() {
                if (self.tank.id === null) {
                    console.log('Saving New TAnk', self.tank);
                    createTank(self.tank);
                } else {
                    updateTank(self.tank, self.tank.id);
                    console.log('tank updated with id ', self.tank.id);
                }
                reset();
            }

            function edit(id) {
                console.log('id to be edited', id);
                for (var i = 0; i < self.tanks.length; i++) {
                    if (self.tanks[i].id === id) {
                        self.tank = angular.copy(self.tanks[i]);
                        break;
                    }
                }
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