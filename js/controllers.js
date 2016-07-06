
angular.module('starter.controllers', [])

.controller('MetheorAlertCtrl', function ($scope, Planets) {

    $scope.planets = Planets.all();
    
})

