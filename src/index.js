import app from './app.js'
const port=3000;
 app.listen(port, (err) => {
    if (err) {
        console.error('Error al intentar iniciar el servidor:', err);
    } else {
        console.log(`El servidor está escuchando en el puerto ${port}`);
    }
});





