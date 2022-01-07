"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = require('../models/user');

var Photo = require('../models/photo');

var bcrypt = require("bcryptjs");

var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var res,
        users,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _args.length > 1 && _args[1] !== undefined ? _args[1] : response;
            _context.prev = 1;
            _context.next = 4;
            return User.find();

          case 4:
            users = _context.sent;
            res.status(200).json({
              status: 200,
              success: true,
              msg: 'Usuarios obtenidos con éxito',
              items: users
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

  return function getUsers(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getUserById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req) {
    var res,
        user,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : response;
            _context2.prev = 1;
            _context2.next = 4;
            return User.findById(req.params.uid);

          case 4:
            user = _context2.sent;
            res.status(200).json({
              status: 200,
              success: true,
              msg: 'Usuario obtenido con éxito',
              item: user
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

  return function getUserById(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var postUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req) {
    var res,
        password,
        newUser,
        salt,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : response;
            console.log(req.body);
            _context3.prev = 2;
            password = req.body.password; // ** Utilizamos nuestro schema de usuario y le pasamos el objeto que recibimos de la peticion

            newUser = new User(req.body); //Encriptar contraseña

            salt = bcrypt.genSaltSync(); //numero de veces que se aplicará encriptación

            newUser.password = bcrypt.hashSync(password, salt); //encriptación de contraseña
            // ** Lo guardamos en la base de datos mediante el metodo save

            _context3.next = 9;
            return newUser.save();

          case 9:
            res.status(201).json({
              status: 201,
              success: true,
              msg: 'El usuario se guardó correctamente',
              item: newUser
            });
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(400).json({
              status: 400,
              success: false,
              msg: _context3.t0.message,
              item: {}
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 12]]);
  }));

  return function postUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var patchUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req) {
    var res,
        password,
        salt,
        user,
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
            return User.findByIdAndUpdate(req.params.uid, req.body);

          case 8:
            _context4.next = 10;
            return User.findById(req.params.uid);

          case 10:
            user = _context4.sent;
            // const user = await User.findById(req.params.uid, req.body)
            res.status(201).json({
              status: 201,
              success: true,
              msg: 'El usuario actualizado correctamente',
              item: user
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

  return function patchUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var buyPhoto = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req) {
    var res,
        user,
        photo,
        updatedUser,
        _args5 = arguments;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            res = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : response;
            console.log(req.body);
            _context5.prev = 2;
            _context5.next = 5;
            return User.findById(req.params.uid);

          case 5:
            user = _context5.sent;
            _context5.next = 8;
            return Photo.findById(req.body.photo);

          case 8:
            photo = _context5.sent;
            updatedUser = _objectSpread(_objectSpread({}, user), {}, {
              photos: [].concat(_toConsumableArray(user.photos), [photo])
            });
            _context5.next = 12;
            return User.findByIdAndUpdate(req.params.uid, updatedUser);

          case 12:
            // const user = await User.findById(req.params.uid, req.body)
            res.status(201).json({
              status: 201,
              success: true,
              msg: 'El usuario actualizado correctamente',
              item: user
            });
            _context5.next = 19;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(400).json({
              status: 400,
              success: false,
              msg: _context5.t0.message,
              item: {}
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 15]]);
  }));

  return function buyPhoto(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var deleteUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req) {
    var res,
        user,
        _args6 = arguments;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            res = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : response;
            _context6.prev = 1;
            _context6.next = 4;
            return User.findById(req.params.uid);

          case 4:
            user = _context6.sent;
            _context6.next = 7;
            return User.findByIdAndDelete(req.params.uid);

          case 7:
            res.status(200).json({
              status: 200,
              success: true,
              msg: 'Usuario eliminado con éxito',
              item: user
            });
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              status: 500,
              success: false,
              msg: _context6.t0.message,
              item: {}
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 10]]);
  }));

  return function deleteUser(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

module.exports = {
  getUsers: getUsers,
  postUser: postUser,
  patchUser: patchUser,
  deleteUser: deleteUser,
  getUserById: getUserById,
  buyPhoto: buyPhoto
};