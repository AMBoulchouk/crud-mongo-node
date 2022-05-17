const express = require('express');
const router = express.Router();
const {inicio} = require('../controller/controller.js')

/* GET home page. */
router.get('/', inicio);

module.exports = router;
