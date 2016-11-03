//引入express依赖模块
var express = require('express');

//实例化Express
var app = express();

//handlebars 视图引擎及目录，视图文件扩展名
var handlebars = require('express-handlebars');
handlebars({
    //默认布局为main
    defaultLayout: 'main',
    //设置模板引擎文件后缀为.hbs
    extname: '.hbs',
    //创建一个Handlebars辅助函数，给出一个静态资源的链接
    helpers: {
        static: function (name) {
            return require('./lib/static.js').map(name);
        },
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
app.engine('hbs', handlebars({extname: ".hbs"}));

app.set('view engine', 'hbs');


//引入fs

//引入body-parser解析表单
// app.use(require('body-parser')());
var bodyParser = require('body-parser');    //老师的
//path
var path = require('path');
//serve-favicon站点图标
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

//导入自定义模块位置
var routers_index = require('./routes/index');
//端口
app.set('port', process.env.PORT || 3005);

//静态资源
// app.use(express.static(__dirname + '../public'));

//路由
app.use('/', routers_index);

// 404
app.use(function (req, res) {
    res.status(404);
    res.render('errors/404');
});

//500
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('errors/500');
});

//listen
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl+c to terminate.');
});