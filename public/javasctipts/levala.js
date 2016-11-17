angular.module('myApp',[]).controller(
    'levalA',['$scope',function ($scope) {
        $scope.title = 'LevelA';
        $scope.valueA = 1;
        $scope.inc = function () {
            $scope.valueA++;
        }
    }]
).controller('LevelB',['$scope',function ($scope) {
    $scope.title = 'LevelB';
    $scope.valueB = 1;
    $scope.inc = function () {
        $scope.valueB++;
    }
}]).controller('LevelC',['$scope',function ($scope) {
    $scope.title = 'LevelC';
    $scope.valueC = 1;
    $scope.inc = function () {
        $scope.valueC++;
    }
}]);