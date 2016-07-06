

angular.module('starter.services', [])

.factory('Planets', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data


	var planets = [

		{
	        id: Mercúrio,
	        name: Mercúrio,
			metheors:[

			]
    	},
		{
	        id: Vênus,
	        name: Vênus,
			metheors:[
					{
						name:MeteoroContraVenus
					},

			]
    	},
		{
	        id: Terra,
	        name: Terra,
			metheors:[

			]
    	},

	] 
    

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

