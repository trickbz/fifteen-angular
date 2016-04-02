(function () {
  angular
    .module('appModule')
    .controller('ConfigurationController', function ($scope) {
      // will be taked from server using service
      $scope.defaultBoardWidth = 4;
      $scope.defaultBoardHeight = 4;

      $scope.boardWidth = $scope.defaultBoardWidth;
      $scope.boardHeight = $scope.defaultBoardHeight;

      $scope.$watchGroup(['boardWidth', 'boardHeight'], function (newValue, oldValue) {
        $scope.randomizeBoard();
      });

      $scope.generateSolvedBoardArray = function () {
        var fieldsCount = $scope.boardHeight * $scope.boardWidth;
        return _.map(new Array(fieldsCount), function (item, index) {
          return index == fieldsCount - 1 ?
            0: index + 1;
        });
      }

      $scope.arrayFromNumber = function (number) {
        return new Array(number);
      }

      $scope.resetBoardSizeToDefault = function () {
        $scope.boardWidth = $scope.defaultBoardWidth;
        $scope.boardHeight = $scope.defaultBoardHeight;
      }

      $scope.isDefaultBoardSize = function () {
        return $scope.boardWidth == $scope.defaultBoardWidth && $scope.boardHeight == $scope.defaultBoardHeight;
      }

      $scope.ordinalFieldNumberFromIndexes = function (indexHeight, indexWidth) {
        return $scope.boardWidth * indexHeight + indexWidth;
      }

      $scope.randomizeBoard = function () {
        var solvedArray = $scope.generateSolvedBoardArray();
        $scope.board = _.shuffle(solvedArray);
      }

      $scope.randomizeBoard();
    });
})();
