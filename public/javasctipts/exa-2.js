var exa_a = angular.module("myApp",[]);
exa_a.controller("HelloController",
    function ($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title="==AngularJS==";
    }
);