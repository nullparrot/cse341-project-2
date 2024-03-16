// Requirements
const express = require('express');
const router = new express.Router();
const tabletsController = require('../controllers/tablets');

//Routes
router.get('/', tabletsController.getAll);

router.get('/:id', tabletsController.getSingle);

router.post('/', tabletsController.createTablet);

router.put('/:id', tabletsController.updateTablet);

router.delete('/:id', tabletsController.deleteTablet );

module.exports = router;