'use strict';

/* Controllers */

var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('CitiesController', ['$scope', '$http','$routeParams','$location', '$cookies',
  function($scope, $http, $routeParams, $location, $cookies) {
    var API = 'b08bf6965ed698cc4e87a0957d34a389';
    var cityName = $routeParams.city;
    $scope.weather = {};
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
    $http({
            method:'GET',
            url:'http://api.openweathermap.org/data/2.5/weather?q='+
                  cityName+'&lang=en&units=metric'+'&APPID='+API
                          }).success(function(data) {
      $scope.weather = data;
          });
    $scope.close = function(index){
      $scope.cities.splice(index, 1);
    };
}]);
