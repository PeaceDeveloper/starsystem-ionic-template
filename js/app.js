

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('metheorAlert', {
        url: '/metheor-alert',
        templateUrl: 'templates/metheor-alert.html',
        controller: 'MetheorAlertCtrl'
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/metheor-alert');

});


