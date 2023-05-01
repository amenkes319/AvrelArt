const express = require('express');
const router = express.Router();
const paintingsController = require('../controllers/paintingsController');

router.get('/', paintingsController.getAllPaintings);
router.get('/:id', paintingsController.getPaintingById);
router.get('/type/:type', paintingsController.getPaintingsByType);

module.exports = router;
