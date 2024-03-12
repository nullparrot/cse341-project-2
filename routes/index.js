// Requirements
const express = require('express');
const router = new express.Router();
const indexController = require('../controllers/');

//Routes
router.get('/', indexController.sendHello);

module.exports = router;