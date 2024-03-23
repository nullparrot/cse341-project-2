// Requirements
const express = require('express');
const router = new express.Router();
const tabletsController = require('../controllers/tablets');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate')

//Routes
router.get('/', tabletsController.getAll);

router.get('/:id', tabletsController.getSingle);

router.post('/', isAuthenticated, validation.saveDevice, tabletsController.createTablet);

router.put('/:id', isAuthenticated, validation.saveDevice, tabletsController.updateTablet);

router.delete('/:id', isAuthenticated, tabletsController.deleteTablet );

module.exports = router;