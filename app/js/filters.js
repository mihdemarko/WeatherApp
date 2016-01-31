angular.module('weatherFilters', [])
  .filter('addPlus', function() {
    return function(input) {
      return parseInt(input)>0 ? '+'+parseInt(Math.round(input)) : parseInt(Math.round(input));
    };
  })
  .filter('capitalFirst', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
  });
