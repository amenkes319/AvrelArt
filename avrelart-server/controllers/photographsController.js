const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');
const Photograph = require('../models/photograph');

const photographsData = path.join(__dirname, '..', 'data', 'photographs.json');

const getAllPhotographs = (req, res) => {
    fsExtra.readJson(photographsData, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                fsExtra.writeJson(photographsData, [], (err) => {
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

const getPhotographById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    fsExtra.readJson(photographsData, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                fsExtra.writeJson(photographsData, [], (err) => {
                    if (err) {
                        res.status(500).json({ message: 'Error creating data' });
                    } else {
                        res.status(404).json({ message: 'Photograph not found' });
                    }
                });
            } else {
                res.status(500).json({ message: 'Error reading data' });
            }
        } else {
            const photograph = data.find(p => p.id === id);
            if (photograph) {
                res.status(200).json(photograph);
            } else {
                res.status(404).json({ message: 'Photograph not found' });
            }
        }
    });
};

const getPhotographsByType = (req, res) => {
    const type = req.params.type;
    if (!Photograph.validType(type)) {
        res.status(400).json({ message: 'Invalid type' });
        return;
    }

    fsExtra.readJson(photographsData, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                fsExtra.writeJson(photographsData, [], (err) => {
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
            const photographs = data.filter(p => p.type === type);
            res.status(200).json(photographs);
        }
    });
};

module.exports = {
    getAllPhotographs,
    getPhotographById,
    getPhotographsByType,
};
