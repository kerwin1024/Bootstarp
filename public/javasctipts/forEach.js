var myEach = angular.module("myEach", []);
myEach.controller("EachCrl", ['$scope',function ($scope) {
    var myArr = [{score: 95}, {score: 98}, {score: 92}];
    angular.forEach(myArr, function (value, key) {
        if (key == 1) {
            $scope.score = myArr[key].score;
        }
    });
}]);

var myModule = angular.module('myModule', []);
myModule.controller(
    'MainCtrl',
    [
        //这种注入方式是安全的。。
        '$log',
        function ($log) {
        }
    ]
);
