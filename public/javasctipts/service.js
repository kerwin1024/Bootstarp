function Itemservice() {
    var items = [
        {id: 1, label: 'Item0'},
        {id: 2, label: 'Item1'}
    ];
    
    this.list = function () {
        return ItemService.list();
    };
    this.add = function () {
        ItemService.add({
            id: self.list().length + 1,
            label: 'Item' + self.list().length
        });
    }
}
var app = angular.module('notesApp', [])
    .controller('SubCtrl', ['ItemService', function (ItemService) {
        var self = this;
        self.list = function () {
            return ItemService.list();
        };
        self.add = function () {
            ItemService.add({
                id: self.list().length + 1,
                label: 'Item' + self.list().length
            });
        }
    }])
.service