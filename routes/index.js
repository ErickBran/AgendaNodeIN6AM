var express = require('express');
var router = express.Router();

var lista = [
    {"nombre": "Javier"},
    {"nombre": "Hola"},
    {"nombre": "XD"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  var cookie = req.cookies;
  if(cookie.nick !== undefined) {
    var content = "Hola " + cookie.nick;
    res.render("index", { Mensaje: content});
  } else {
    res.render("index", { Mensaje: "Usted no esta logeado"});
  }
});

router.get('/cookies', function(req, res, next) {
  res.status(200).send(req.cookies);
});



router.get('/autenticar', function(req, res, next) {
  res.render("autenticar");
});

router.get('/nombres', function(req, res) {
  res.render('lista', {lista});
});

router.post('/nombre/nuevo', function(req, res) {
  res.render('lista', {lista});
});

module.exports = router;
