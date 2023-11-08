import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener la lista de productos
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDeleteProduct = (productId) => {
    // Realiza una solicitud DELETE a la API para eliminar el producto por su ID
    fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Producto eliminado con éxito');
          // Recarga la página actual para refrescar la lista de productos
          window.location.reload();
        } else {
          console.error('Error al eliminar el producto');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>${product.precio}</td>
              <td>
                <Link to={`/admin/edit/${product.id}`}>Editar</Link>
                <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
