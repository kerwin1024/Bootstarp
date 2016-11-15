var myEach = angular.module("myEach", []);
myEach.controller("EachCrl",function ($scope) {
        var myArr = [{score: 95}, {score: 98}, {score: 92}];
        angular.forEach(myArr, function (value, key) {
            if (key == 1) {
                $scope.score = myArr[key].score;
            }
        });
    });