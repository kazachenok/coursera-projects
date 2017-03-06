(function () {
  'use strinct';

  angular.module("ShoppingListCheckOff", [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyList();

    toBuyList.isEmpty = function () {
      return toBuyList.items.length == 0;
    }

    toBuyList.bought = function (index) {
      ShoppingListCheckOffService.boughtItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;

    alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList();

    alreadyBoughtList.isEmpty = function () {
      return alreadyBoughtList.items.length == 0;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      { name: "Milk", quantity: 1 },
      { name: "Donuts", quantity: 4 },
      { name: "Cookies", quantity: 2 },
      { name: "Chocolate", quantity: 5 },
      { name: "Peanut Butter", quantity: 2 }
    ];

    var alreadyBoughtList = [];

    service.getToBuyList = function() {
      return toBuyList;
    }

    service.getAlreadyBoughtList = function () {
      return alreadyBoughtList;
    }

    service.boughtItem = function (index) {
      var item = toBuyList[index];
      alreadyBoughtList.push(item);
      toBuyList.splice(index,1);    }
  }
})();
