var express = require('express');
var router = express.Router();
var static = require('../lib/static.js');

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

/*mybird*/
router.get('/mybird',function(req,res,next){
    res.render("mybird");
});
/*angular*/
router.get('/angular',function(req,res,next){
    res.render("angular",{fromjs:'This is server JS'});
})
/*list*/
router.get('/list',function(req,res,next){
    res.render("list");
})
router.post('/login',function(req,res,next){
    var data={
        mes:'Login successful for'+req.body.userName,user:req.body
    };
    res.send(data);
})

router.get('/detail',function(req,res,next){
    res.render("detail");
})


router.get('/captcha', function (req, res) {
    var svgCaptcha = require('svg-captcha');
    var captcha = svgCaptcha.create({size:8});
    req.session.captcha = captcha.text;
    res.set('Content-Type', 'image/svg+xml');
    res.status(200).send(captcha.data);
});

module.exports = router;
