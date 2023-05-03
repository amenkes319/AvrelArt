const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/achievementsController');

router.get('/', achievementsController.getAllAchievements);
router.get('/:id', achievementsController.getAchievementById);
router.get('/type/:type', achievementsController.getAchievementsByType);

module.exports = router;