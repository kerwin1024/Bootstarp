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

module.exports = router;
