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
        <div className="text-center">
          <p className="mb-4">El inventario se encuentra vacío.</p>
          <Link to="/admin/add" className="text-blue-500">Agregar producto</Link>
        </div>
      ) : (
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="product-item border p-4 rounded-md">
              <img
                src={`/uploads/${product.imagen}`}
                alt={`Imagen de ${product.nombre}`}
                className="product-image max-h-40 object-cover mx-auto mb-4"
              />

              <div className="product-details">
                <h3 className="text-lg font-semibold mb-2">
                  {product.nombre} (ID: {product.id})
                </h3>
                <p className="text-gray-700">${product.precio}</p>
              </div>
              <div className="product-actions mt-4">
                <Link to={`/admin/edit/${product.id}`} className="text-blue-500 mr-4">Editar</Link>
                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 my_button">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ToastContainer para mostrar las alertas */}
      <ToastContainer />
    </Box>
  );
}

export default ProductList;
