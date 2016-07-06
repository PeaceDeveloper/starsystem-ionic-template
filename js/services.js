angular.module('starter.services', [])

.factory('Planets', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var planets = [{
        id: 0,
        name: 'Mercúrio'
    }, {
        id: 1,
        name: 'Vênus',
        metheors: [{ name: 'Metheoro 1' }]
    }, {
        id: 2,
        name: 'Terra'
    }];

    return {
        all: function () {
            return planets;
        },
        remove: function (planet) {
            planets.splice(planets.chatsindexOf(planet), 1);
        },
        get: function (planetId) {
            for (var i = 0; i < planets.length; i++) {
                if (planets[i].id === parseInt(planetId)) {
                    return planets[i];
                }
            }
            return null;
        }
    };
});
