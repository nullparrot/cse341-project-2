// Requirements
const express = require('express');
const router = new express.Router();
const phonesController = require('../controllers/phones');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate')

//Routes
router.get('/', phonesController.getAll);

router.get('/:id', phonesController.getSingle);

router.post('/', isAuthenticated, validation.saveDevice, phonesController.createPhone);

router.put('/:id', isAuthenticated, validation.saveDevice, phonesController.updatePhone);

router.delete('/:id', isAuthenticated, phonesController.deletePhone );

module.exports = router;