const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { uploadPainting, uploadPhotograph } = adminController;

const isAuthenticated = require('../middlewares/isAuthenticated');

router.post('/paintings', isAuthenticated, uploadPainting.single('file'), adminController.createPainting);
router.put('/paintings/:id', isAuthenticated, adminController.updatePainting);
router.delete('/paintings/:id', isAuthenticated, adminController.deletePainting);

module.exports = router;