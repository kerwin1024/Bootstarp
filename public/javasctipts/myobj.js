var myObjF = angular.module("myobj",[]);
myObjF.controller("objCtrl",
    function($scope){
    
    var myObj = {
        name:"jack",
        value:33,
        getValue:function(){return this.name;}
    };
    
    var myCopy = angular.copy(myObj);
    $scope.last=angular.equals(myObj,myCopy);
})
