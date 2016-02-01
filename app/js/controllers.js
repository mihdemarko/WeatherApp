'use strict';

/* Controllers */

var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('CitiesController', ['$scope','$location', '$stateParams', 'storeCities', CitiesController]);
weatherControllers.controller('CityWeatherController', ['$scope', '$stateParams','getWeather', CityWeatherController]);

function CitiesController ($scope, $location, $stateParams, storeCities) {

  function City(name){
    this.name = name;
    this.href = '#/' + name.replace(/\s+/g, '');
    }

  $scope.$on("$locationChangeStart", function(){
    localStorage.setItem('lastHref', '/' + $stateParams.city);
  });

  $scope.init = function(){
    var lastHref = localStorage.getItem('lastHref');
    console.log(lastHref);
    $location.path(lastHref);
  };

  $scope.cities = storeCities.getCities();

  $scope.addCity = function(newCity){
    var goodCity = newCity.replace(/\W|_+/g, '');
    var saveList = [];
    if (goodCity){
      $scope.cities.push(new City(goodCity));
      $location.path('/' + goodCity.replace(/\s+/g, ''));
      storeCities.saveCities($scope.cities);
    }
    $scope.newCity = null;
  };
  $scope.close = function(index){
    $scope.cities.splice(index, 1);
    storeCities.saveCities($scope.cities);
  };
}

function CityWeatherController ($scope, $stateParams, getWeather) {
  $scope.weather = {};
  var cityName = $stateParams.city;
  $scope.weather = getWeather.getData(cityName);
  console.log($stateParams.city);
}

