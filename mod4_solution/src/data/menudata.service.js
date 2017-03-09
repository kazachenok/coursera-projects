(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBaseUrl']
  function MenuDataService ($http, ApiBaseUrl) {
    var service = this;

    service.getAllCategories = function () {
      //this method should return a promise which is a result of using the $http service,
      //using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
      return $http({
        method: 'GET',
        url: (ApiBaseUrl + '/categories.json')
      }).then(function success(response) {
        return response.data;
      })
    };

    service.getItemsForCategory = function (categoryShortName) {
      //this method should return a promise which is a result of using the $http service,
      //using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
      //where, before the call to the server, your code should append whatever
      //scategoryShortName value was passed in as an argument into the getItemsForCategory method.
      return $http({
        method: 'GET',
        url: (ApiBaseUrl + '/menu_items.json'),
        params: {category : categoryShortName }
      }).then(function success(response) {
        return response.data;
      })
    };
  }
}());
