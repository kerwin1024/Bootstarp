var firstApp = angular.module('firstA', []);
firstApp.controller('FirstController',
    function ($scope) {
        $scope.first = 'some';
        $scope.last = "one";
        $scope.heading = 'Message:';
        $scope.updateMessage = function () {
            $scope.message = "Hello" + " " + $scope.first + ' ' + $scope.last + '!';
        };
    });