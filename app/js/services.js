var weatherServices = angular.module('weatherServices', ['ngResource']);
weatherServices.factory('getWeather', ['$resource', '$routeParams', getWeather]);

function getWeather($resource, $routeParams){
  var API = 'b08bf6965ed698cc4e87a0957d34a389';
  var cityName = $routeParams.city;
  return $resource('http://api.openweathermap.org/data/2.5/weather?q='+
                cityName+'&lang=en&units=metric'+'&APPID='+API, {}, {
      query: {method:'GET', isArray:true}
    });
}
