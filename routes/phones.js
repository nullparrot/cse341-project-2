// Requirements
const express = require('express');
const router = new express.Router();
const phonesController = require('../controllers/phones');
const validation = require('../middleware/validate');

//Routes
router.get('/', phonesController.getAll);

router.get('/:id', phonesController.getSingle);

router.post('/', validation.saveDevice, phonesController.createPhone);

router.put('/:id', validation.saveDevice, phonesController.updatePhone);

router.delete('/:id', phonesController.deletePhone );

module.exports = router;