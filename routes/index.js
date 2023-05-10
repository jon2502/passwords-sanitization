const clean = require('xss-clean/lib/xss').clean
var express = require('express');
var router = express.Router();
const xss = require('xss-clean')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sanitize', function(req,res){
  console.log('test')
  console.log(clean(req.body.userIndput))
})

module.exports = router;
