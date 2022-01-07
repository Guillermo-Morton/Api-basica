"use strict";

var _require = require("express-validator"),
    validationResult = _require.validationResult;

var fieldValidator = function fieldValidator(req, res, next) {
  //valido si el campo es valido chequeando el error que obtuve en routes
  console.log('HOLA ESTOY FUNCIONANDO PARA ALGO', req);
  var errors = validationResult(req);
  console.log('errores', !errors.isEmpty());

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  fieldValidator: fieldValidator
};