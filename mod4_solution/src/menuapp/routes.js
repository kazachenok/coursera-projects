(function () {
'use strict'

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/home');

    // UI states
    $stateProvider

    // Home page
    .state('home', {
      url: '/home',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'MenuCategoriesController as categories',
      resolve:{
        items: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categoryItems', {
      url: '/categories/{category}',
      templateUrl: 'src/menuapp/templates/categoryItems.template.html',
      controller: 'CategoryItemsController as categoryItems',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
    }
    });
  };
})();
