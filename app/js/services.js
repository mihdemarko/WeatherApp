var weatherServices = angular.module('weatherServices', ['ngResource']);
weatherServices.factory('getWeather', ['$resource', getWeather]);

function getWeather($resource){
  var API = 'b08bf6965ed698cc4e87a0957d34a389';
  return {
    getData: function(name){
      var data = $resource('http://api.openweathermap.org/data/2.5/weather?q='+
               name+'&lang=en&units=metric'+'&APPID='+API, {}, {
       query: {method:'GET', isArray:false}});
      return data.query();
    }
  };
}
