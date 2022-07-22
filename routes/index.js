var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'contact-page.html'));
});

router.get('/portfolio', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'projects.html'));
});

router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'about.html'));
});





module.exports = router;




