angular.module('notesApp',[]).controller('MainCtrl',[function () {
    var self = this;
    self.notes = {
        shyam:{
            id:1,
            label:'First Note',
            done:false
        },
        Misko:{
            id:2,
            label:'Second Note',
            done:true
        },
        brad:{
            id:3,
            label:'Finished Note',
            done:false
        }
    };
}]);