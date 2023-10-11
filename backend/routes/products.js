const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para obtener la lista de productos
router.get('/products', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.json(results);
  });
});

module.exports = router;
