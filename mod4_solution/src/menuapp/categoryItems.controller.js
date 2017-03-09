(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['items'];
  function CategoryItemsController(items) {
    var menuItems = this;
    menuItems.items = items.menu_items;
    menuItems.name = items.category.name;
    menuItems.instructions = items.category.special_instructions;
  }
}());
