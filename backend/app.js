const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());

const port = 3000;
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

