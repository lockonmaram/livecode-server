var express = require('express');
var router = express.Router();
var itemController = require('../controllers/itemsController')
var Authorization = require('../middleware/authorization')

/* GET users listing. */
router.post('/', Authorization.authorization,itemController.addItem)
router.get('/', itemController.getItems)

module.exports = router;
