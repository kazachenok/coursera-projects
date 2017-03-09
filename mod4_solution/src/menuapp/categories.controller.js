(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['items'];
  function MenuCategoriesController(items) {
    var categories = this;
    categories.items = items;
  }
}());
