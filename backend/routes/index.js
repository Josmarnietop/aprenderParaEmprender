var express = require('express');
var router = express.Router();
const usersRouter = require('./users');
const noticiasRouter = require('./noticias');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("aqui va el listado de los accesos a las distintas tablas");
});

router.use('/users', usersRouter);
router.use('/noticias', noticiasRouter);

module.exports = router;
