const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// Importa las rutas
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

app.use(cors());
app.use(bodyParser.json()) // for parsing application/json

// Agrega las rutas a la aplicación
app.use(registerRoute);
app.use(loginRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
});
