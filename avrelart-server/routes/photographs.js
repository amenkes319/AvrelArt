const express = require('express');
const router = express.Router();
const photographsController = require('../controllers/photographsController');

router.get('/', photographsController.getAllPhotographs);
router.get('/:id', photographsController.getPhotographById);
router.get('/type/:type', photographsController.getPhotographsByType);

module.exports = router;
