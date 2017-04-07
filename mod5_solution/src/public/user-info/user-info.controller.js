(function() {
  'use strict';

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['UserInfoService', 'MenuService']
function UserInfoController(UserInfoService, MenuService) {
  var $ctrl = this
  $ctrl.registered = UserInfoService.isRegistered();
  if ($ctrl.registered) {
    var info = UserInfoService.getRegisterInfo();
    $ctrl.fullName = info.firstName + " " +  info.lastName;
    $ctrl.email = info.emailAddress;
    $ctrl.phone = info.phoneNumber;

    MenuService.getMenuItemByShortName(info.menuItem).then(function functionName(response) {
        $ctrl.menuItem = response.data;
    });
  }

}
}());
