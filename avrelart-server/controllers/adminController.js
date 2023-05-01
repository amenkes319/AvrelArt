const fs = require('fs');
const path = require('path');
const Painting = require('../models/painting');
const Photograph = require('../models/photograph');
const Achievement = require('../models/achievement');
const fsExtra = require('fs-extra');
const multer = require('multer');

const paintingsData = path.join(__dirname, '..', 'data', 'paintings.json');

const paintingsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const paintingsDir = path.join(__dirname, '..', 'data', 'paintings');
        fsExtra.ensureDir(paintingsDir, (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, paintingsDir);
            }
        });
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});


const uploadPainting = multer({ storage: paintingsStorage });

const readData = (dataPath, callback) => {
    fsExtra.readJson(dataPath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') { // file does not exist
                callback(null, []); // return empty array
            } else {
                callback(err); // return error
            }
        } else {
            callback(null, data); // return data
        }
    });
};

const writeData = (dataPath, data, callback) => {
    const dirPath = path.dirname(dataPath);
    fsExtra.ensureDir(dirPath, (err) => {
        if (err) {
            callback(err); // return error
        } else {
            fsExtra.writeJson(dataPath, data, (err) => {
                if (err) {
                    callback(err); // return error
                } else {
                    callback(null); // return success
                }
            });
        }
    });
};

const getNextId = (array) => {
    return array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1;
};

const createPainting = (req, res) => {
    readData(paintingsData, (err, paintings) => {
        if (err) {
            res.status(500).json({ message: 'Error reading data' });
        } else {
            painting = JSON.parse(req.body.data);
            const newPainting = new Painting(
                getNextId(paintings),
                req.file.filename,
                painting.title,
                painting.description,
                painting.medium,
                painting.size,
                painting.price,
                painting.type,
            );

            paintings.push(newPainting);
            writeData(paintingsData, paintings, (err) => {
                if (err) {
                    res.status(500).json({ message: 'Error writing data' });
                } else {
                    res.status(201).json(newPainting);
                }
            });
        }
    });
};


const updatePainting = (req, res) => {
    const id = parseInt(req.params.id, 10);
    readData(paintingsData, (err, paintings) => {
        if (err) {
            res.status(500).json({ message: 'Error reading data' });
        } else {
            const index = paintings.findIndex(painting => painting.id === id);
            if (index >= 0) {
                const updatedPainting = new Painting(
                    id,
                    paintings[index].filename,
                    req.body.title,
                    req.body.description,
                    req.body.medium,
                    req.body.size,
                    req.body.price,
                    req.body.type,
                );
                paintings[index] = updatedPainting;
                writeData(paintingsData, paintings, (err) => {
                    if (err) {
                        res.status(500).json({ message: 'Error writing data' });
                    } else {
                        res.status(200).json(updatedPainting);
                    }
                });
            } else {
                res.status(404).json({ message: 'Painting not found' });
            }
        }
    });
};

const deletePainting = (req, res) => {
    const id = parseInt(req.params.id, 10);
    readData(paintingsData, (err, paintings) => {
        if (err) {
            res.status(500).json({ message: 'Error reading data' });
        } else {
            const index = paintings.findIndex(painting => painting.id === id);
            if (index >= 0) {
                fs.unlink(path.join(__dirname, '..', 'data', 'paintings', paintings[index].filename), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                paintings.splice(index, 1);
                writeData(paintingsData, paintings, (err) => {
                    if (err) {
                        res.status(500).json({ message: 'Error writing data' });
                    } else {
                        res.status(200).json({ message: 'Painting deleted successfully' });
                    }
                });
            } else {
                res.status(404).json({ message: 'Painting not found' });
            }
        }
    });
};

module.exports = {
    createPainting,
    updatePainting,
    deletePainting,
    uploadPainting,
};
