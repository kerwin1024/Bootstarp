var express = require('express');
var router = express.Router();

/*GET home page*/
router.get('/', function (req, res, next) {
    //render(路由页面，上下文对象)
    res.render('index', {title: 'Express'});
});
/*signup*/
router.get('/signup',function(req,res,next){
    res.render('signup',{title:'signup'});
});

/*contact us*/
router.get('/contact',function (req,res,next) {
    res.render('contact');
});

/*about page*/
router.get('/about',function (req,res,next) {
    res.render("about");
});

/*test form*/
router.get('/testform',function(req,res,next){
    res.render("testform");
});

/*customjs*/
router.get('/customjs',function(req,res,next){
    res.render("customjs");
});

module.exports = router;
