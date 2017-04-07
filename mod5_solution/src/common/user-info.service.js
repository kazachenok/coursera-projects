(function() {
  'use strict';

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  var service = this;
  var registered = false;

  var userInfo = {
    firstName : "",
    lastName : "",
    emailAddress : "",
    phoneNumber : "",
    menuItem : ""
  };

  service.isRegistered = function() {
    return registered;
  }

  service.register = function(firstName, lastName, emailAddress, phoneNumber, menuItem ) {
    userInfo.firstName = firstName;
    userInfo.lastName = lastName;
    userInfo.emailAddress = emailAddress;
    userInfo.phoneNumber = phoneNumber;
    userInfo.menuItem = menuItem;

    registered = true;
  }

  service.getRegisterInfo = function() {
    if (registered){
      return userInfo;
    }else {
      return undefined;
    }
  }
}
}());
