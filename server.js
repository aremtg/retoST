const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor backend!');
});

app.listen(port, () => {
  console.log(`El servidor está funcionando en http://localhost:${port}`);
});
