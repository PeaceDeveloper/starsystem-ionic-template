angular.module('starter.controllers', [])

.controller('MetheorAlertCtrl', function ($scope, Planets) {

    $scope.planets = Planets.all();

    $scope.remove = function (planet) {
        Planets.remove(planet);
    };
})