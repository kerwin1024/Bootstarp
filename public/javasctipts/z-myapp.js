var myApp = angular.module('app',[]);
myApp.controller('Ctrl',['$scope',function ($scope) {
    var self = this;
    // self.toDataURL()
    self.toUrl = '/signup';
    self.items = [
        'Node.js',
        'Bootstrap',
        'JQ uery'
    ]
}])