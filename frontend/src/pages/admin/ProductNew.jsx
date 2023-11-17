import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Box from "../../components/miniComponents/Box";

function ProductNew() {
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    precio: "",
    imagen: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const inputValue = type === "file" ? files[0] : value;

    setNewProduct({
      ...newProduct,
      [name]: inputValue,
    });
  };

  const handleAddProduct = () => {
    // Validación básica
    if (!newProduct.nombre || !newProduct.precio || !newProduct.imagen) {
      Swal.fire("Error", "Por favor, complete todos los campos.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", newProduct.nombre);
    formData.append("precio", newProduct.precio);
    formData.append("imagen", newProduct.imagen);

    fetch("/api/products", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al agregar el producto.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Producto agregado con éxito:", data);
        Swal.fire("Éxito", "Producto agregado con éxito.", "success");
        // Limpiar el formulario después de agregar
        setNewProduct({
          nombre: "",
          precio: "",
          imagen: null,
        });
        // Puedes redirigir al usuario a otra página después de agregar el producto
        // window.location.href = '/ruta/nueva';
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire("Error", "Hubo un problema al agregar el producto.", "error");
      });
  };
  return (
    <Box>
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-6">Agregar Nuevo Producto</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={newProduct.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="number"
            name="precio"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={newProduct.precio}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Imagen
          </label>
          <input
            type="file"
            name="imagen"
            accept="image/*"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 my_button w-full"
          onClick={handleAddProduct}
        >
          Agregar
        </button>
        <div className="relative">
          {/* ... Resto del código ... */}
          <Link
            to="/admin"
            className="text-white bg-blue-700 rounded-full p-3 fixed bottom-8 right-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Box>
  );
}

export default ProductNew;
