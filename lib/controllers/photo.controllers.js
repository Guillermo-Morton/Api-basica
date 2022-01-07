"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Photo = require('../models/photo');

var getPhotos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var res,
        photos,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            _context.prev = 1;
            _context.next = 4;
            return Photo.find();

          case 4:
            photos = _context.sent;
            res.status(200).json({
              status: 200,
              success: true,
              msg: 'Fotos obtenidas con éxito',
              items: photos
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              status: 500,
              success: false,
              msg: _context.t0.message,
              items: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function getPhotos(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getPhotoById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
    var res,
        photo,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : response;
            _context2.prev = 1;
            _context2.next = 4;
            return Photo.findById(req.params.id);

          case 4:
            photo = _context2.sent;
            res.status(200).json({
              status: 200,
              success: true,
              msg: 'Fotos obtenidas con éxito',
              item: photo
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              status: 500,
              success: false,
              msg: _context2.t0.message,
              item: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getPhotoById(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var postPhoto = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req) {
    var res,
        password,
        newPhoto,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : response;
            console.log(req.body);
            _context3.prev = 2;
            password = req.body.password; // ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion

            newPhoto = new Photo(req.body); // ** Lo guardamos en la base de datos mediante el metodo save

            _context3.next = 7;
            return newPhoto.save();

          case 7:
            res.status(201).json({
              status: 201,
              success: true,
              msg: 'La foto se guardó correctamente',
              item: newPhoto
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(400).json({
              status: 400,
              success: false,
              msg: _context3.t0.message,
              item: {}
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function postPhoto(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var patchPhoto = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req) {
    var res,
        password,
        salt,
        photo,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : response;
            console.log(req.body);
            _context4.prev = 2;
            password = req.body.password;
            salt = bcrypt.genSaltSync(); //numero de veces que se aplicará encriptación

            req.body.password = bcrypt.hashSync(password, salt); //encriptación de contraseña
            // ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion

            _context4.next = 8;
            return Photo.findByIdAndUpdate(req.params.id, req.body);

          case 8:
            _context4.next = 10;
            return Photo.findById(req.params.id);

          case 10:
            photo = _context4.sent;
            // const photo = await Photo.findById(req.params.id, req.body)
            res.status(201).json({
              status: 201,
              success: true,
              msg: 'La foto actualizado correctamente',
              item: photo
            });
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(400).json({
              status: 400,
              success: false,
              msg: _context4.t0.message,
              item: {}
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 14]]);
  }));

  return function patchPhoto(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var deletePhoto = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req) {
    var res,
        photo,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : response;
            _context5.prev = 1;
            _context5.next = 4;
            return Photo.findById(req.params.id);

          case 4:
            photo = _context5.sent;
            _context5.next = 7;
            return Photo.findByIdAndDelete(req.params.id);

          case 7:
            res.status(200).json({
              status: 200,
              success: true,
              msg: 'Foto eliminada con éxito',
              item: photo
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            res.status(500).json({
              status: 500,
              success: false,
              msg: _context5.t0.message,
              item: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));

  return function deletePhoto(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  getPhotos: getPhotos,
  postPhoto: postPhoto,
  patchPhoto: patchPhoto,
  deletePhoto: deletePhoto,
  getPhotoById: getPhotoById
};