angular.module('notesApp', []).controller(
    'MainCtrl',
    [function () {
        var self = this;
        self.notes = [
            {
                label: 'First Note', 
                done: false, 
                assignee: 'Shyam'
            },
            {
                label: 'Second Note', 
                done: true
            },
            {
                label: 'Done Note', 
                done: false, 
                assignee: 'Brad'
            },
            {
                label: 'Last Note', 
                done: false
            }
        ];
        self.getNoteClass = function (status) {
            return {
                done: status,
                pending: !status
            };
        };
    }]);