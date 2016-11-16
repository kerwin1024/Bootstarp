angular.module('notesApp',[]).controller('MainCtrl',[function () {
    // 将this赋给self避免污染this
    var self = this;
    self.notes = [
        {id:1,label:'First Note',done:false},
        {id:2,label:'Second Note',done:true},
        {id:3,label:'Done Note',done:false},
        {id:4,label:'Last Note',done:false}
    ];
    self.changeMe = function(){
        self.notes[1].label = 'Change Note';
    };
}]);