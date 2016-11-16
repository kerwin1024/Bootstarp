var tbapp = angular.module('userTableApp',['ngTable']);
tbapp.component('userTable',{
    templateUrl:'template/user-table.component.hbs',
    controller:userTableController
});

userTableController.$inject = ['NgTableParams'];
function userTableController(NgTableParams) {
    var data = [
        {name:'Moroni',age:50},
        {name:'Simon',age:40}];
    this.tableParams = new NgTableParams({},{
        dataset:data
    });
}