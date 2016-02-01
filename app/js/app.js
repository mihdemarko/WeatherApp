
var weatherApp = angular.module('weatherApp', [
  'ngRoute',
  'ngCookies',
  'weatherControllers',
  'weatherFilters',
  'weatherServices',
  'ui.router'
]);


weatherApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('cities', {
      url: "/:city",
      templateUrl: "partials/weather-details.html",
      controller: 'CityWeatherController'});
    // $routeProvider.
    //   when('/:city', {
    //     templateUrl: 'partials/weather-details.html',
    //     controller: 'CityWeatherController'
    //   }).
    //   otherwise({
    //     redirectTo: '/'
    //   });
  }]);
