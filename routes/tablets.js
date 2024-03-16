// Requirements
const express = require('express');
const router = new express.Router();
const tabletsController = require('../controllers/tablets');
const validation = require('../middleware/validate');

//Routes
router.get('/', tabletsController.getAll);

router.get('/:id', tabletsController.getSingle);

router.post('/', validation.saveDevice, tabletsController.createTablet);

router.put('/:id', validation.saveDevice, tabletsController.updateTablet);

router.delete('/:id', tabletsController.deleteTablet );

module.exports = router;