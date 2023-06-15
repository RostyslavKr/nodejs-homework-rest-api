const multer = require('multer');
const path = require('path');

const { HttpError } = require('../helpers');

const destination = path.resolve('tmp');

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const newName = `${uniquePrefix}_${file.originalname}`;
    cb(null, newName);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
