angular.module('notesApp',[]).controller('MainCtrl',['$log',function ($log) {
    var self = this;
    self.logStuff = function(){
        $log.log('The button was pressed');
    };
}]);

//injector.js
var myMod = angular.module('myMod',[]);
//值提供器
myMod.value('modMsg','Hello from My Module');

//安全的依赖注入
myMod.controller('MyModCtrlB',['$scope','modMsg',function ($scope,msg) {
    $scope.message = msg;
}]);

var myApp = angular.module('myApp',['myMod']);
myApp.value('appMsg','Hello from My App');
myApp.controller('MyAppCtrlA',['$scope','appMsg',function($scope,msg){
    $scope.message = msg;
}]);