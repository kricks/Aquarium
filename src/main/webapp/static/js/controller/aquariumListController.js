'use strict';

angular
    .module('myApp')
    .controller(
        'aquariumListController',
        ['aquariumListService', function(aquariumListService) {
                
        		var self = this;
                
                self.aquarium = {
                    id: null,
                    name: undefined,
                    type: 'Fresh Water',
                    gallon: undefined,
                    notes: undefined,
                    date: null
                };

                self.aquariums = [];

                self.submit = submit;
                self.edit = edit;
                self.remove = remove;
                self.reset = reset;

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
                    aquariumListService.createAquarium(aquarium).then(fetchAllAquariums);
                }

                function updateAquarium(aquarium, id) {
                    console.log(id);
                    aquariumListService
                        .updateAquarium(aquarium, id)
                        .then(fetchAllAquariums,
                            function(errResponse) {
                                console
                                    .error('Error while updating aquarium');
                            });
                }

                function deleteAquarium(id) {
                    aquariumListService
                        .deleteAquarium(id)
                        .then(fetchAllAquariums);
                }

                function submit() {
                    if (self.aquarium.id === null) {
                        console.log('Saving New aquarium',
                            self.aquarium);
                        createAquarium(self.aquarium);
                    } else {
                        updateAquarium(self.aquarium,
                            self.aquarium.id);
                        console.log('aquarium updated with id ',
                            self.aquarium.id);
                    }
                    reset();
                }
                
                function view(id) {
                	console.log("view selected" + id);
                }

                function edit(id) {
                    console.log('id to be edited' + id);
                    for (var i = 0; i < self.aquariums.length; i++) {
                        if (self.aquariums[i].id === id) {
                            self.aquarium = angular.copy(self.aquariums[i]);
                            self.aquarium.date = new Date(self.aquarium.date);
                        }
                    }
                }

                function remove(id) {
                    console.log('id to be deleted', id);
                    deleteAquarium(id);
                }

                function reset() {
                    self.aquarium = {
                        id: null,
                        name: undefined,
                        type: 'Fresh Water',
                        gallon: undefined,
                        notes: undefined,
                        date: null
                    };
                }

            }
        ]);