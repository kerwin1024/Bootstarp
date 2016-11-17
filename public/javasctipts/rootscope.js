angular.module('myApp', []).run(function ($rootScope) {
    $rootScope.rootValue = 5;
}).controller('myCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.value = 10;
    $scope.difference = $scope.value - $rootScope.rootValue;
}]).controller('myCtrl2', ['$scope', 'start', function ($scope, start) {
    $scope.value = start;
}]);

