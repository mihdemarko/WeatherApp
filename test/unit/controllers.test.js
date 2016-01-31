'use strict';

describe('weatherApp controllers', function(){

  describe('CitiesController', function(){

    beforeEach(module('weatherApp'));

    it('should create "Cities" model with 2 cities', function($controller) {
      var scope = {},
          ctrl = $controller('CitiesController', {$scope:scope});

      expect(scope.cities.length).toBe(2);
    });

  });
});

