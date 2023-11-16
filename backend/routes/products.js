const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuración de multer para almacenar archivos en disco
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../frontend/public/uploads'));
  },
  filename: function (req, file, cb) {
    // Usar el nombre del producto como nombre del archivo
    const nombreProducto = req.body.nombre.toLowerCase().replace(/\s/g, '_');
    const extension = path.extname(file.originalname);
    cb(null, `${nombreProducto}${extension}`);
  },
});

const upload = multer({ storage: storage });

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Ruta para crear un nuevo producto
router.post('/', upload.single('imagen'), (req, res) => {
  const { nombre, precio } = req.body;
  const nombreProducto = nombre.toLowerCase().replace(/\s/g, '_');
  const imagenNombre = `${nombreProducto}${path.extname(req.file.originalname)}`;

  // Mover la imagen al directorio correcto
  fs.renameSync(req.file.path, path.join(__dirname, '../../frontend/public/uploads', imagenNombre));

  // Agregar el producto a la base de datos con el nombre de la imagen
  const query = 'INSERT INTO productos (nombre, precio, imagen) VALUES (?, ?, ?)';
  db.query(query, [nombre, precio, imagenNombre], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al crear el producto' });
    } else {
      res.status(201).json({ message: 'Producto creado con éxito', id: result.insertId });
    }
  });
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM productos WHERE id = ?', [productId], (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      const product = result[0];
      const base64Image = `data:image/jpeg;base64,${product.imagen.toString('base64')}`;
      product.imagen = base64Image;
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  });
});

// Ruta para actualizar un producto por ID
router.put('/:id', upload.single('imagen'), (req, res) => {
  const productId = req.params.id;
  const { nombre, precio } = req.body;
  const nuevaImagen = req.file ? req.file.buffer : null;

  const query = 'UPDATE productos SET nombre = ?, precio = ?, imagen = ? WHERE id = ?';
  db.query(query, [nombre, precio, nuevaImagen, productId], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al actualizar el producto' });
    } else {
      res.json({ message: 'Producto actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un producto por ID
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  db.query('DELETE FROM productos WHERE id = ?', [productId], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al eliminar el producto' });
    } else {
      res.json({ message: 'Producto eliminado' });
    }
  });
});


module.exports = router;
