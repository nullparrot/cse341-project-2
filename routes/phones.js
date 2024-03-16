// Requirements
const express = require('express');
const router = new express.Router();
const phonesController = require('../controllers/phones');

//Routes
router.get('/', phonesController.getAll);

router.get('/:id', phonesController.getSingle);

router.post('/', phonesController.createPhone);

router.put('/:id', phonesController.updatePhone);

router.delete('/:id', phonesController.deletePhone );

module.exports = router;