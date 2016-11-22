var app = angular.module('myApp',[]);
app.controller('Ctrl',[function () {
    var self = this;
    self.cameras = [
        {make:'Canon',model:'70d',mp:20.2},
        {make:'Canon',model:'6d',mp:20},
        {make:'Nikon',model:'D7100',mp:24.1},
        {make:'Nikon',model:'D5200',mp:24.1}
    ]
}]);