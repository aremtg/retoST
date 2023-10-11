const express = require('express');
const app = express();
const PORT = 3000;

// Define una ruta para obtener productos desde la base de datos
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    // Agrega más productos aquí
  ];
  res.json(products);
});

// Define una ruta para la raíz ("/")
app.get('/', (req, res) => {
  res.send('¡Hola desde la raíz de la aplicación!');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
