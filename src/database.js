// ** Importamos a mongoose y llamamos a nuestra url desde las variables de entorno
const mongoose = require('mongoose')

const dbConnect = () => {
    // ** Creamos la coneccion de mongoose, le pasamos la url que guardamos anteriormente, y las configuraciones basicas
    mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // **En caso de que ocurra un error al conectarse mostrar un error
    .catch(error => console.log('Error al conectar con la base de datos', error))
    
    // ** Guardamos la coneccion de mongoose en una variable para poder usar sus metodos de manera mas sencilla
    const connection= mongoose.connection
    // ** Utilizamos el metodo once (una vez que), y le pasamos el evento open, (una vez que la coneccione este abierta, mostrar un mensaje)
    connection.once('open', () => {
        console.log('Base de datos conectada')
    })
}
module.exports = dbConnect