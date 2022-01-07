const { validationResult } = require("express-validator");

const fieldValidator = (req, res, next) => {
  //valido si el campo es valido chequeando el error que obtuve en routes
  console.log('HOLA ESTOY FUNCIONANDO PARA ALGO', req)
  const errors = validationResult(req);
  console.log('errores',!errors.isEmpty())
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
    fieldValidator,
};