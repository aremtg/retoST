import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    nombre: '',
    precio: '',
    imagen: null, // Nuevo campo para la imagen
  });

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  const handleUpdateProduct = () => {
    const formData = new FormData();
    formData.append('nombre', product.nombre);
    formData.append('precio', product.precio);
    formData.append('imagen', product.imagen);

    fetch(`/api/products/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Producto actualizado con éxito:', data);
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleInputChange = (event) => {
    const { name, type } = event.target;

    const inputValue = type === 'file' ? event.target.files[0] : event.target.value;

    setProduct({
      ...product,
      [name]: inputValue,
    });
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      <p>Nombre: {product.nombre}</p>
      <p>Precio: ${product.precio}</p>

      <input type="file" name="imagen" accept="image/*" onChange={handleInputChange} />

      <input
        type="text"
        placeholder="Nuevo nombre"
        onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
      />
      <input
        type="number"
        placeholder="Nuevo precio"
        onChange={(e) => setProduct({ ...product, precio: e.target.value })}
      />
      <button onClick={handleUpdateProduct}>Actualizar</button>
    </div>
  );
}

export default ProductEdit;
