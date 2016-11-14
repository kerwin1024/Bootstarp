//声明一个应用，第二个有参数即声明，没有第二个即引用
var App = angular.module("App",[]);
App.controller("MyController",function($scope,$timeout){
    var updateClock = function(){
        $scope.clock = new Date();
        $timeout(function(){
            updateClock();
        },1000);
    };
    updateClock();
});