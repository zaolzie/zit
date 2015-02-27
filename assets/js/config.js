var myApp = angular.module("cPanel", ["ui.router", "firebase"]);

myApp.constant('FIREBASE_URI', "https://blinding-inferno-2185.firebaseio.com/");

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })
    .state('players', {
        url: '/players',
        templateUrl: 'templates/players.html'
    })
    
    
  $urlRouterProvider.otherwise('/home');
})