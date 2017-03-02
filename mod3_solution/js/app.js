(function () {
'use strict'

angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com")
  .directive('menuItemDescription', MenuItemDescription)

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;

    narrowItDown.searchData = "";
    narrowItDown.items = [];

    narrowItDown.requestItems = function () {
      if (!narrowItDown.searchData || narrowItDown.searchData === "") {
          MenuSearchService.resetFoundItems();
          narrowItDown.items = MenuSearchService.foundItems;
      }
      else {
        MenuSearchService.getMatchedMenuItems(narrowItDown.searchData)
          .finally(function() {
            narrowItDown.items = MenuSearchService.foundItems;
          });
      }
    }

    narrowItDown.removeItem = function (index) {
      return MenuSearchService.removeItem(index);
    };

    narrowItDown.isEmpty = function () {
      return narrowItDown.items.length == 0
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBaseUrl'];
  function MenuSearchService($http, ApiBaseUrl) {
    var service = this;

    service.foundItems = [];

    service.resetFoundItems = function () {
      service.foundItems = [];
    }

    service.getMatchedMenuItems = function (searchTerm) {
      service.resetFoundItems();

      return $http({
        method: "GET",
        url: (ApiBaseUrl + "/menu_items.json")
      }).then(function (result) {
        var menu = result.data.menu_items;
        for (var item in menu) {
          if (checkItemByCriteria(menu[item], searchTerm)) {
            service.foundItems.push(menu[item]);
          };
        }
      });
    }

    function checkItemByCriteria(item, searchTerm) {
      return item.description && item.description.indexOf(searchTerm) > -1;
    }

    service.isEmpty = function () {
      return service.foundItems.length == 0
    };

    service.removeItem = function (index) {
      service.foundItems.splice(index,1);
    }
  }

  function MenuItemDescription() {
    var ddo = {
      templateUrl: 'snippets\\menuitem.directive.html',
      scope: {
        items: "<",
        onRemove: "&"
      },
      controller: MenuItemDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function MenuItemDirectiveController() {
    var menu = this;

    // menu.isEmpty = function () {
    //   return menu.items.length == 0
    // };

    // menu.removeItem = function (index) {
    //   menu.items.splice(index,1);
    // };
  }
})()
