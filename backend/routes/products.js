const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Actualiza la ruta para que coincida con la URL en tu componente React
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos: ' + error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

module.exports = router;