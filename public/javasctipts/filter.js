var app = angular.module("myApp",[]);
app.controller('MyCtrl',['$scope','$filter',function ($scope,$filter) {
    $scope.name = $filter('lowercase')('Ari');
    // $scope.money = $filter('lowercase')('Ari');
}])