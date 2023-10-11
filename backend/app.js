const express = require('express');
const app = express();
const productosRouter = require('./routes/products');
const cors = require('cors');

app.use(cors()); // Configurar CORS para permitir todas las solicitudes

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor backend!');
});

// Corrige la ruta aquí para que coincida con la URL en tu componente React
app.use('/products', productosRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
