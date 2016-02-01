
var phonecatApp = angular.module('weatherApp', [
  'ngRoute',
  'ngCookies',
  'weatherControllers',
  'weatherFilters',
  'weatherServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/:city', {
        templateUrl: 'partials/weather-details.html',
        controller: 'CityWeatherController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
