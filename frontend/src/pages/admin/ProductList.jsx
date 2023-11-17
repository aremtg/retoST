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
         <div className="text-center mt-16">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16l2 10H2l2-10zm0 0v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
         </svg>
         <p className="mt-4 mb-2 text-2xl font-semibold">¡El inventario está vacío!</p>
         <p className="mb-8">Agrega productos para mostrar.</p>
         <Link to="/admin/add" className="inline-block bg-black hover:bg-slate-800 text-white py-2 px-4 rounded-md transition duration-300">
           Agregar producto
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block w-6 h-6 ml-2 align-middle">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
           </svg>
         </Link>
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
              <div className="product-actions mt-4 flex items-center">
                <Link to={`/admin/edit/${product.id}`} className="text-blue-500 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>

                </Link>
                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 my_button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ToastContainer para mostrar las alertas */}
      <ToastContainer />

      <div className="relative">
        { /* ... Resto del código ... */}
        <Link to="/admin/add" className="text-white bg-black rounded-full p-3 fixed bottom-8 right-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>
    </Box>
  );
}

export default ProductList;
