
var phonecatApp = angular.module('weatherApp', [
  'ngRoute',
  'ngCookies',
  'weatherControllers',
  'weatherFilters'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/:city', {
        templateUrl: 'partials/weather-details.html',
        controller: 'CitiesController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
