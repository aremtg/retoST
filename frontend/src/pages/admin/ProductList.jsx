import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from "../../components/miniComponents/Box";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDeleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('Producto eliminado con éxito');
          window.location.reload();
        } else {
          console.error('Error al eliminar el producto');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Box>
      {products.length === 0 ? (
        <p>El inventario se encuentra vacío.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={`/uploads/${product.imagen}`}
                alt={`Imagen de ${product.nombre}`}
                className="product-image"
              />

              <div className="product-details">
                <h3 className="product-name">
                  {product.nombre} (ID: {product.id})
                </h3>
                <p className="product-price">${product.precio}</p>
              </div>
              <div className="product-actions">
                <Link to={`/admin/edit/${product.id}`}>Editar</Link>
                <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="add-product-button">
        <Link to="/admin/add">Agregar producto</Link>
      </div>

      {/* ToastContainer para mostrar las alertas */}
      <ToastContainer />
    </Box>
  );
}

export default ProductList;
