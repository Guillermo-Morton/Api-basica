"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/photo.controllers'),
    postPhoto = _require2.postPhoto,
    getPhotos = _require2.getPhotos,
    getPhotoById = _require2.getPhotoById,
    deletePhoto = _require2.deletePhoto,
    patchPhoto = _require2.patchPhoto;

var _require3 = require('../helpers/field-validator'),
    fieldValidator = _require3.fieldValidator;

var router = Router();
router.get('/photo', [], getPhotos);
router.get('/photo/:uid', [], getPhotoById);
router.post('/photo', [], postPhoto);
router["delete"]('/photo/:uid', [], deletePhoto);
router.patch('/photo/:uid', [], patchPhoto);
module.exports = router;