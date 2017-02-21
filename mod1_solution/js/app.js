(function () {
'use strict'

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.menu = "";
  $scope.state = "";

  var statesEnum ={
    NODATA: "noData",
    ENJOY: "enjoy",
    TOOMUCH: "tooMuch"
  };

  $scope.checkIfTooMuch = function () {
    var total = totalMenuItems($scope.menu);
    $scope.state = getState(total);
    $scope.message = getMessage($scope.state);
  };

  function totalMenuItems(menu) {
    var total = 0;
    var items = menu.split(",");
    for (var ind in items) {
      if(items[ind].trim()) {
        total++;
      }
    }
    return total;
  };

  function getState(total){
    if (!total){
      return statesEnum.NODATA;
    }
    if (total <=3 ){
      return statesEnum.ENJOY;
    }
    else {
      return statesEnum.TOOMUCH;
    }
  }

  function getMessage(state) {
    var message = "";
    switch (state) {
      case statesEnum.NODATA:
        message = "Please enter data first";
        break;
      case statesEnum.ENJOY:
        message = "Enjoy!";
        break;
      case statesEnum.TOOMUCH:
        message = "Too much!";
        break;
      default:
    }
    return message;
  }
}

})();
