(function() {
  'use strict';

angular.module('common')
.directive('menuItemExists', MenuItemExists)

MenuItemExists.$inject = ['MenuService'];
function MenuItemExists(MenuService) {
  return {
    restrict: 'A',
    require: 'ngModel',

    // create linking function and pass in our NgModelController as a 4th argument
    link: function(scope, element, attr, ctrl) {

      function customValidator(ngModelValue) {
        console.log(ngModelValue);

        MenuService.getMenuItemByShortName(ngModelValue).then(
          function successCallback(response) {
              ctrl.$setValidity('found', true);
            },
          function errorCallback(response) {
              ctrl.$setValidity('found', false);
            }
          );

          return ngModelValue;
      }

      ctrl.$parsers.push(customValidator);
    }
  };
}
}());
