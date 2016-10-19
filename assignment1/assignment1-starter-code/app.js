(function () {
  'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', lunchChecker);

    lunchChecker.$inject=['$scope']
    function lunchChecker($scope){
      $scope.name = "test";
      var numberOfWords = 0;

      $scope.checkInput = function(){
          var items = $scope.name.split(";");
          numberOfWords = 0;
           for (var i = 0; i < items.length; i++) {
            if (items[i].trim().length != 0)
              numberOfWords++;
           };
      };

      $scope.showMessage = function(){
        var message = "Please enter data first";
        if (numberOfWords > 3)
          message = "Too much!"
        else if (numberOfWords > 0)
          message = "Enjoy!";
        return message;
      };
    };

})();
