angular.module('notesApp',[]).controller(
    'MainCtrl',
    [function () {
        var self = this;
        var notes = [
            {
                id:1,
                label:'First Note',
                done:false,
                someRandom:3141595
            },
            {
                id:2,
                label:'Second Note',
                done:false
            },
            {
                id:3,
                label:'Finished Note',
                done:true
            }
        ];
        self.notes1 =angular.copy(notes);
        self.notes2 =angular.copy(notes);
        self.changeNotes = function () {
            notes = [
                {
                    id:1,
                    label:'Changed Note',
                    done:false,
                    someRandom:4245
                },
                {
                    id:2,
                    label:'Second Note',
                    done:false
                },
                {
                    id:2,
                    label:'Finished Note',
                    done:true
                }
            ];
            self.notes1 =angular.copy(notes);
            self.notes1 =angular.copy(notes);
        };
    }]
);