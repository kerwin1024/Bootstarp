//引入express依赖模块
var express = require('express');

//实例化Express
var app = express();

//引入body-parser解析表单
var bodyParser = require('body-parser');

//mongo===credentials
var credentials = require('./credentials.js');

//cookie-parser
app.use(require('cookie-parser')(credentials.cookieSecret));

//express-session
app.use(require('express-session')());

//emailService
var emailService = require('./lib/email.js')(credentials);

//database configuration
var mongoose = require('mongoose');

var options = {
    server: {
        //保持数据库连接，避免重新登录
        socketOptions: {keepAlive: 1}
    }
};
switch (app.get('env')) {
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString, options);
        break;
    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, options);
        break;
    default:
        throw new Error('Unknow execution environment: ' + app.get('env'));
}
//path
var path = require('path');

//serve-favicon站点图标
var favicon = require('serve-favicon');

//handlebars 视图引擎及目录，视图文件扩展名
var handlebars = require('express-handlebars').create({

    //默认布局为main
    defaultLayout: 'main',

    //设置模板引擎文件后缀为.hbs
    extname: '.hbs',

    //创建一个Handlebars辅助函数，给出一个静态资源的链接
    helpers: {
        static: function (name) {
            return require('./lib/static.js').map(name);
        },
        //声明section函数
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
//设置引擎
app.engine('hbs', handlebars.engine);
//设置视图
app.set('view engine', 'hbs');

//设置静态资源 static server
app.use(express.static(__dirname + '/public'));

//设置ico图标
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//引入fs（暂时用不上）
// var fs = require('fs');

//导入自定义模块位置（路由、模型、模式）
var routers_index = require('./routes/index');

//设置端口
app.set('port', process.env.PORT || 3005);

//中间件bodyparser
app.use(bodyParser());


//中间件（局部文件）
app.use(function (req, res, next) {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.discountContext = {
        locations: [{product: 'book', price: '99.00'}]
    };
    next();
});

//设置路由（根目录为上面定义的routers_index）
app.use('/', routers_index);

//定制404页面
app.use(function (req, res) {
    res.status(404);
    //不使用布局
    res.render('errors/404', {layout: null});
});

//定制500页面
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    //使用指定布局
    res.render('errors/500', {layout: 'error', title: 'This pang with error layout'});
});

//listen
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+c to terminate.');
});