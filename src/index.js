// Objetivo: archivo principal de la aplicación
require('dotenv').config();
//IMPORTO EXPRESS
const express = require('express');
//INICIALIZO EXPRESS
const app = express();
//CONFIGURACIONES
app.use(express.json()); //PARA QUE EXPRESS LEA JSON DEL BODY
app.use(express.urlencoded({ extended: false })); //PARA QUE EXPRESS LEA FORMULARIOS
//IMPORTO RUTAS
const usuarioRoutes = require('./routes/usuario.routes');
const loginRoutes = require('./routes/login.routes');
const videojuegosRoutes = require('./routes/videojuegos.routes');
const plataformaRoutes = require('./routes/plataformas.routes');
//RUTAS
app.use('/usuario', usuarioRoutes);
app.use('/auth', loginRoutes);
app.use('/videojuegos', videojuegosRoutes);
app.use('/plataforma', plataformaRoutes);
//RUTA POR DEFECTO
app.all('*', (req, res) => {
    res.json(
        {
            "estado": false,
            "msj": "URL no encontrada"
        }
    );
})
//INICIO SERVIDOR
app.listen(process.env.PORT, () => {
    // acá hay un temita, le corregí el parám del puerto, por que si lo editas acá te queda la embarrá en la variables de entorno
    console.log(`Servidor iniciado correctamente en el puerto ${process.env.PORT} :D \n en el caso de requerir cambiar el puerto, editarlo en el .env`);
});
// como dato adicional - las variables de entorno (los archivos env) van en la misma ruta que el index o donde se inicializa la app