var express = require('express');
var router = express.Router();
var wordCtrl = require('../controllers/word');

/* GET home page. */
router.get('/', wordCtrl.getAll);

module.exports = router;
