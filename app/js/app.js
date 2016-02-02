
var weatherApp = angular.module('weatherApp', [
  'ngRoute',
  'ngCookies',
  'weatherControllers',
  'weatherFilters',
  'weatherServices',
  'ui.router',
  'ngAnimate'
]);


weatherApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('cities', {
      url: "/weather/:city",
      templateUrl: "partials/weather-details.html",
      controller: 'CityWeatherController'});
  }]);
