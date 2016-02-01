'use strict';

/* Controllers */

var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('CitiesController', ['$scope', '$http','$routeParams','$location', '$cookies',CitiesController]);
weatherControllers.controller('CityWeatherController', ['$scope', '$http','$routeParams', 'getWeather', CityWeatherController]);
function CitiesController ($scope, $http, $location, $cookies) {
  console.log('Started');
  function City(name){
    this.name = name;
    this.href = '#/' + name.replace(/\s+/g, '');
    }

  $scope.cities = [new City('New York'), new City('London')];

  $scope.addCity = function(newCity){
    var goodCity = newCity.replace(/\W|_+/g, '');
    if (goodCity){
      $scope.cities.push(new City(goodCity));
      $location.path('/' + goodCity.replace(/\s+/g, ''));
    }
    $scope.newCity = null;
  };
  $scope.close = function(index){
    $scope.cities.splice(index, 1);
  };
}

function CityWeatherController ($scope, $http, getWeather) {
  $scope.weather = {};
  $scope.weather = getWeather.query();
  console.log($scope.weather);

}
