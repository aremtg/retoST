import React, { useState } from 'react';

function ProductNew() {
  const [newProduct, setNewProduct] = useState({
    nombre: '',
    precio: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    if (!newProduct.nombre || !newProduct.precio) {
      console.error('Completa todos los campos');
      return;
    }

    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
          console.log('Producto agregado con éxito');
        }
      )
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={newProduct.nombre}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={newProduct.precio}
        onChange={handleInputChange}
      />
      <button onClick={handleAddProduct}>Agregar</button>
    </div>
  );
}

export default ProductNew;
