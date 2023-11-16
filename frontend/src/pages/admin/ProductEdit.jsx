import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '../../components/miniComponents/Box';

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
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al actualizar el producto.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Producto actualizado con éxito:', data);
        toast.success('Producto actualizado con éxito');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Error al actualizar el producto');
      });
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
    <Box>
      <div>
        <h2 className="text-center text-2xl font-semibold mb-4">Editar Producto</h2>
        <div className='px-2 py-2  '>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nueva Imagen</label>
            <input type="file" name="imagen" accept="image/*" onChange={handleInputChange} />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nuevo Nombre</label>
            <input
              type="text"
              placeholder="Nuevo nombre"
              className="border border-gray-300 p-2"
              onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nuevo Precio</label>
            <input
              type="number"
              placeholder="Nuevo precio"
              className="border border-gray-300 p-2"
              onChange={(e) => setProduct({ ...product, precio: e.target.value })}
            />
          </div>

        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 my_button"
          onClick={handleUpdateProduct}
        >
          Actualizar
        </button>

        {/* ToastContainer para mostrar las alertas */}
        <ToastContainer />
      </div>
    </Box>

  );
}

export default ProductEdit;
