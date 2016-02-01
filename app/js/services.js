var weatherServices = angular.module('weatherServices', ['ngResource']);
weatherServices.factory('getWeather', ['$resource', getWeather]);
weatherServices.factory('storeCities', ['$resource', storeCities]);

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

function storeCities(){
  var defaultCities = ['New York', 'London'];
  return {
    getCities: function(){
        function City(name){
          this.name = name;
          this.href = '#/' + name.replace(/\s+/g, '');
          }
        var cityList = [];
        var returnCities = [];
        if(localStorage.getItem('savedCities')){
          cityList = JSON.parse(localStorage.getItem('savedCities'));
        } else {
          cityList = defaultCities;
                }
        for (var c in cityList){
          returnCities.push(new City(cityList[c]));
        }
        return returnCities;
      },
    saveCities: function(citiesObj){
      var saveList = [];
      for (var c in citiesObj){
        saveList.push(citiesObj[c].name);
      }
      localStorage.setItem('savedCities', JSON.stringify(saveList));
    }
  };

}
