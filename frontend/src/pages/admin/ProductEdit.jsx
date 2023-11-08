import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [newData, setNewData] = useState({});

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  const handleUpdateProduct = () => {
    fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      <p>Nombre: {product.nombre}</p>
      <p>Precio: ${product.precio}</p>
      <input
        type="text"
        placeholder="Nuevo nombre"
        onChange={(e) => setNewData({ ...newData, nombre: e.target.value })}
      />
      <input
        type="number"
        placeholder="Nuevo precio"
        onChange={(e) => setNewData({ ...newData, precio: e.target.value })}
      />
      <button onClick={handleUpdateProduct}>Actualizar</button>
    </div>
  );
}

export default ProductEdit;
