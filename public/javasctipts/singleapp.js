angular.module('singleApp', ['ngRoute'])
//配置路由
    .config(function ($routeProvider) {
        $routeProvider
        //路由到注册页面
            .when('/signup', {
                templateUrl: 'template/signup.hbs',
                controller: 'signupController'
            })
            //路由到登录页面
            .when('/login', {
                templateUrl: 'template/login.hbs',
                controller: 'loginController'
            })
            //路由到编辑页面
            .when('/edit', {
                templateUrl: 'template/edit.hbs',
                controller: 'editController'
            })
            //路由到忘记密码页面
            .when('/forgotpwd', {
                templateUrl: 'template/forgotpwd.hbs',
                controller: 'forgotpwdController'
            })
            .when('/detail',{
                templateUrl: 'template/detail.hbs',
                controller:'detailController'
            });
    })
    //注册
.controller('signupController',[function () {
    var self = this;
    self.message='注册'
}])
    //登录
    .controller('loginController',['$http',function ($http) {
    var self = this;
    // self.message='登录', 
        self.login=function () {
            //服务器端同样是post
            $http.post('/login',self.user).then(function (resp) {
                self.message = resp.data.msg;
                self.messageFull = resp.data.user.userName+'你的密码是：'+resp.data.user.password;
            });
        }
}])
    //编辑
    .controller('editController',[function () {
    var self = this;
    self.message='编辑'
}])
    //忘记密码
.controller('forgotpwdController',[function () {
    var self = this;
    self.message='忘记密码'
}])
    .controller('detailController',[function () {
        var self = this;
        self.message = 'detail'
        // self.personCount=
        self.keyInfo = {};
        self.mouseInfo = function(event){
            self.keyInfo.keyCode = event.keyCode;
        };
        self.mouseClick = function (event) {
            self.mouseInfo.clientX = event.clientX;
            self.mouseInfo.clientY = event.clientY;
            self.mouseInfo.screenX =event.screenX;
            self.mouseInfo.screenY =event.screenY;
        }
    }]);
angular.module('mainApp',['singleApp']);