var express = require('express');
var router = express.Router();

/*GET home page*/
router.get('/', function (req, res, next) {
    res.render('layouts/main', {body: 'Express'});
});

module.exports = router;