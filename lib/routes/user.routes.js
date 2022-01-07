"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/user.controllers'),
    postUser = _require2.postUser,
    getUsers = _require2.getUsers,
    getUserById = _require2.getUserById,
    deleteUser = _require2.deleteUser,
    patchUser = _require2.patchUser,
    buyPhoto = _require2.buyPhoto;

var _require3 = require('../helpers/field-validator'),
    fieldValidator = _require3.fieldValidator;

var router = Router();
router.get('/user', [], getUsers);
router.get('/user/:uid', [], getUserById);
router.post('/user', [], postUser);
router["delete"]('/user/:uid', [], deleteUser);
router.patch('/user/:uid', [], patchUser);
router.patch('/user/photos/:uid', [], buyPhoto);
module.exports = router;