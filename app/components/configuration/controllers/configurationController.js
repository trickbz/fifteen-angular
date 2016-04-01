(function () {
  angular
    .module('appModule')
    .controller('ConfigurationController', function ($scope) {
      $scope.boardWidth = 4;
      $scope.boardHeight = 4;
      $scope.arrayFromNumber = function (number) {
        return new Array(number);
      }
    });
})();
