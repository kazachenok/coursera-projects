(function () {
  'use strict';

  angular.module('MyFirstApplication',[])

    .controller('MyFirstController', function ($scope) {
        $scope.name = '';
        $scope.totalChars = 0;

        $scope.displayTotalChars = function () {
          $scope.totalChars = calulateTotalChars($scope.name);
        };

         function calulateTotalChars(string){
          return $scope.name.length;
        };
    });
})();
