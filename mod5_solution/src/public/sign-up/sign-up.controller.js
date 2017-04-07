(function() {
  'use strict';

angular.module('public')
.controller("SignUpController", SignUpController)

SignUpController.$inject = ['menuCategories', 'MenuService', 'UserInfoService'];
function SignUpController(menuCategories, MenuService, UserInfoService) {
  var $ctrl = this;

  $ctrl.firstName;
  $ctrl.lastName;
  $ctrl.emailAddress;
  $ctrl.phoneNumber;
  $ctrl.menuItem;

  if (UserInfoService.isRegistered()){
    var userInfo = UserInfoService.getRegisterInfo();
      $ctrl.firstName = userInfo.firstName;
      $ctrl.lastName = userInfo.lastName;
      $ctrl.emailAddress = userInfo.emailAddress;
      $ctrl.phoneNumber = userInfo.phoneNumber;
      $ctrl.menuItem = userInfo.menuItem;
  };

  $ctrl.submit = function () {
    console.log($ctrl.emailAddress);

    UserInfoService.register(
      $ctrl.firstName, $ctrl.lastName, $ctrl.emailAddress, $ctrl.phoneNumber, $ctrl.menuItem)
  }
}
}());
