'use strict';

/* Controllers */

var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('CitiesController', ['$scope', '$http','$routeParams','$location',
  function($scope, $http, $routeParams, $location) {
    var API = 'b08bf6965ed698cc4e87a0957d34a389';
    var cityName = $routeParams.city;
    $scope.weather = {};
    function City(name){
      this.name = name;
      this.href = '#/' + name.replace(/\s+/g, '');
    }
    // console.log(JSON.parse(window.localStorage['saveCities'])[0]);

    $scope.cities = [new City('New York'), new City('London')];

    $scope.addCity = function(newCity){
      $scope.cities.push(new City(newCity));
      $scope.newCity = null;
      $location.path('/' + newCity.replace(/\s+/g, ''));
      // window.localStorage['saveCities'] = JSON.stringify($scope.cities);
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
      // window.localStorage['saveCities'] = JSON.stringify($scope.cities);
    };
}]);
