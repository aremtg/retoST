const express = require('express');
const db = require('./db'); // Importar la conexión a la base de datos
const router = express.Router();

// Ruta para obtener productos
router.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

module.exports = router;
