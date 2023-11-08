const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa el archivo de configuración de la base de datos

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Ruta para crear un nuevo producto
router.post('/', (req, res) => {
  const { nombre, precio } = req.body;
  const query = 'INSERT INTO productos (nombre, precio) VALUES (?, ?)';
  db.query(query, [nombre, precio], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Producto creado con éxito', id: result.insertId });
  });
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM productos WHERE id = ?', [productId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Ruta para actualizar un producto por ID
router.put('/:id', (req, res) => {
  const productId = req.params.id;
  const { nombre, precio } = req.body;
  const query = 'UPDATE productos SET nombre = ?, precio = ? WHERE id = ?';
  db.query(query, [nombre, precio, productId], (err) => {
    if (err) throw err;
    res.json({ message: 'Producto actualizado con éxito' });
  });
});

// Ruta para eliminar un producto por ID
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  db.query('DELETE FROM productos WHERE id = ?', [productId], (err) => {
    if (err) throw err;
    res.json({ message: 'Producto eliminado' });
  });
});

module.exports = router;
