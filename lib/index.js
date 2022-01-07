"use strict";

// ** Importamos todo lo necesario
var express = require("express");

var morgan = require("morgan");

var cors = require("cors"); // const path = require("path")


var dbConnect = require('./database');

var userRoutes = require('./routes/user.routes');

var photoRoutes = require('./routes/photo.routes'); // ** Esta linea de codigo nos permite utilizar variables de entorno


require("dotenv").config(); // ** Creamos una instancia de express


var app = express(); // ** Si se encuentra la variable de entorno PORT usamos esa, sino automaticamente usamos puerto 4000

app.set('port', process.env.PORT); // ** Conectamos con la base de datos

dbConnect();
app.listen(app.get('port'), function () {
  console.log('Estoy en el puerto ' + app.get('port'));
}); // ** Aqui implementaremos nuestros middelwares (Herramientas)
// ** Morgan nos permite ver las peticiones en la consola a tiempo real

app.use(morgan('dev')); // ** Cors impide que haya restricciones al hacer peticiones remotas (Desde el navegador por ejemplo)

app.use(cors()); // Json y Urlencoded sirven para que nuestro codigo entienda el formato JSON

app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // Con Static establecemos la carpeta public como estatica

app.use(express["static"]("public")); // **Creamos nuestra ruta

var defaultRoute = '/api'; // ** Aqui es donde llamaremos a las rutas juntandolas con nuestra ruta por defecto

app.use(defaultRoute + '/saludo', function (req, res) {
  res.send('Hola desde el servidor!');
});
app.use(defaultRoute, userRoutes);
app.use(defaultRoute, photoRoutes);