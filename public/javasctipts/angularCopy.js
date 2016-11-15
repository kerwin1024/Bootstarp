var myCopy = angular.module("myCopy",[]);
myCopy.controller("CopyCtrl",[function ($scope) {
    var obj = {
        name:'jack',
        age:50
    }
    //copy出来是json对象，
    $scope.copyObj = angular.copy(obj);
}])
