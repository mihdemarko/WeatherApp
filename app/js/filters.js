angular.module('weatherFilters', [])
  .filter('addPlus', function() {
    return function(input) {
      if (isNaN(input)){
        input=0;
      }
      return parseInt(input)>0 ? '+'+parseInt(Math.round(input)) + '\u2103' : parseInt(Math.round(input)) + '\u2103';
    };
  })
  .filter('capitalFirst', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
  });
