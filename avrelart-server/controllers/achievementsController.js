const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');
const Achievement = require('../models/achievement');

const achievementsData = path.join(__dirname, '..', 'data', 'achievements.json');

const getAllAchievements = (req, res) => {
  fsExtra.readJson(achievementsData, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') { // file does not exist
        fsExtra.writeJson(achievementsData, [], (err) => {
          if (err) {
            res.status(500).json({ message: 'Error creating data' });
          } else {
            res.status(200).json([]);
          }
        });
      } else {
        res.status(500).json({ message: 'Error reading data' });
      }
    } else {
      res.status(200).json(data);
    }
  });
};

const getAchievementById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  fsExtra.readJson(achievementsData, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') { // file does not exist
        fsExtra.writeJson(achievementsData, [], (err) => {
          if (err) {
            res.status(500).json({ message: 'Error creating data' });
          } else {
            res.status(404).json({ message: 'Achievement not found' });
          }
        });
      } else {
        res.status(500).json({ message: 'Error reading data' });
      }
    } else {
      const achievement = data.find(a => a.id === id);
      if (achievement) {
        res.status(200).json(achievement);
      } else {
        res.status(404).json({ message: 'Achievement not found' });
      }
    }
  });
};

const getAchievementsByType = (req, res) => {
  const type = req.params.type;
  if (!Achievement.validType(type)) {
    res.status(400).json({ message: 'Invalid type' });
    return;
  }

  fsExtra.readJson(achievementsData, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') { // file does not exist
        fsExtra.writeJson(achievementsData, [], (err) => {
          if (err) {
            res.status(500).json({ message: 'Error creating data' });
          } else {
            res.status(200).json([]);
          }
        });
      } else {
        res.status(500).json({ message: 'Error reading data' });
      }
    } else {
      const achievements = data.filter(a => a.type === type);
      res.status(200).json(achievements);
    }
  });
}

module.exports = {
  getAllAchievements,
  getAchievementById,
  getAchievementsByType,
};
