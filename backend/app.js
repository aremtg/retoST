const express = require('express');
const app = express();
const apiRouter = require('./api'); // Importar las rutas de la API
const cors = require('cors');

app.use(cors()); // Configurar CORS para permitir todas las solicitudes

// Usar las rutas de la API
app.use('/api', apiRouter);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor Node.js en ejecución en el puerto 3000');
});
