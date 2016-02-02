var weatherServices = angular.module('weatherServices', ['ngResource']);
weatherServices.factory('getWeather', ['$resource', getWeather]);
weatherServices.factory('storeCities', ['$resource', storeCities]);

// service for getting weather from Openweather
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

//local storage
function storeCities(){
  function City(name){
    this.name = name;
    this.href = '#/weather/' + name.replace(/\s+/g, '');
    this.active = false;
  }
  var defaultCities = ['New York', 'London'];
  return {
    //load from local storage
    getCities: function(){
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
      //save to local storage
    saveCities: function(citiesObj){
      var saveList = [];
      var lastName = '';
      for (var c in citiesObj){
        if (citiesObj[c].active){
          lastName = citiesObj[c].name;
        }
        saveList.push(citiesObj[c].name);
      }
      localStorage.setItem('savedCities', JSON.stringify(saveList));
      localStorage.setItem('lastActive', lastName);
    }
  };

}
