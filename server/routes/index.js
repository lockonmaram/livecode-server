var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', userController.registerUser)
router.post('/request_token', userController.login)

module.exports = router;
