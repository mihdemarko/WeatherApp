'use strict';

/* Controllers */

var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('CitiesController', ['$scope','$location', '$stateParams', 'storeCities', CitiesController]);
weatherControllers.controller('CityWeatherController', ['$scope', '$stateParams','getWeather', CityWeatherController]);

//add-remove, initialize cities in tabs
function CitiesController ($scope, $location, $stateParams, storeCities) {
// This class creates a city object from city name
  function City(name){
    this.name = name;
    this.href = '#/weather/' + name.replace(/\s+/g, '');
    this.active = false;
    }

// save city tabs and last position on close
  $scope.$on("$locationChangeStart", function(){
    storeCities.saveCities($scope.cities);
  });

//read and load city tabs and last position on load
  $scope.init = function(){
    var lastHref = localStorage.getItem('lastActive');
    if (lastHref){
      $location.path('/weather/' + lastHref);
    } else {
      $location.path('/');
    }
    $scope.cities = storeCities.getCities();
  };
  var lastActive = 0;
  $scope.active = function(index){
    $scope.cities[lastActive].active = false;
    $scope.cities[index].active = true;
    lastActive = index;
  };

// function that adds new city from search input
  $scope.addCity = function(newCity){
    //replacing non-literal symbols
    var goodCity = newCity.replace(/\W|_+/g, '');
    if (goodCity){
      $scope.cities.push(new City(goodCity));
      $location.path('/weather/' + goodCity.replace(/\s+/g, ''));
      storeCities.saveCities($scope.cities);
    }
    $scope.newCity = null;
  };
  //function that removes city from array on close tab
  $scope.close = function(index){
    $scope.cities.splice(index, 1);
    storeCities.saveCities($scope.cities);
  };
}

//controller of getting data for city
function CityWeatherController ($scope, $stateParams, getWeather) {
  $scope.weather = {};
  var cityName = $stateParams.city;
  $scope.weather = getWeather.getData(cityName);
  console.log($stateParams.city);
}

