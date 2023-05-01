const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');
const Painting = require('../models/painting');

const paintingsData = path.join(__dirname, '..', 'data', 'paintings.json');

const getAllPaintings = (req, res) => {
    fsExtra.readJson(paintingsData, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                fsExtra.writeJson(paintingsData, [], (err) => {
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

const getPaintingById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    fsExtra.readJson(paintingsData, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                fsExtra.writeJson(paintingsData, [], (err) => {
                    if (err) {
                        res.status(500).json({ message: 'Error creating data' });
                    } else {
                        res.status(404).json({ message: 'Painting not found' });
                    }
                });
            } else {
                res.status(500).json({ message: 'Error reading data' });
            }
        } else {
            const painting = data.find(p => p.id === id);
            if (painting) {
                res.status(200).json(painting);
            } else {
                res.status(404).json({ message: 'Painting not found' });
            }
        }
    });
};

const getPaintingsByType = (req, res) => {
    const type = req.params.type;
    if (!Painting.validType(type)) {
        res.status(400).json({ message: 'Invalid type' });
        return;
    }

    fsExtra.readJson(paintingsData, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                fsExtra.writeJson(paintingsData, [], (err) => {
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
            const paintings = data.filter(p => p.type === type);
            if (paintings) {
                res.status(200).json(paintings);
            } else {
                res.status(404).json({ message: 'Painting not found' });
            }
        }
    });
};

module.exports = {
    getAllPaintings,
    getPaintingById,
    getPaintingsByType,
};
