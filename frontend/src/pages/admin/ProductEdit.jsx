import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "../../components/miniComponents/Box";

function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    imagen: null, // Nuevo campo para la imagen
  });

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  const handleUpdateProduct = () => {
    const formData = new FormData();
    formData.append("nombre", product.nombre);
    formData.append("precio", product.precio);
    formData.append("imagen", product.imagen);

    fetch(`/api/products/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el producto.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Producto actualizado con éxito:", data);
        toast.success("Producto actualizado con éxito");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error al actualizar el producto");
      });
  };

  const handleInputChange = (event) => {
    const { name, type } = event.target;
    const inputValue =
      type === "file" ? event.target.files[0] : event.target.value;

    setProduct({
      ...product,
      [name]: inputValue,
    });
  };

  return (
    <Box>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-6">
          Editar Producto
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nuevo Nombre
          </label>
          <input
            type="text"
            placeholder="Nuevo nombre"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nuevo Precio
          </label>
          <input
            type="number"
            placeholder="Nuevo precio"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setProduct({ ...product, precio: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nueva Imagen
          </label>
          <input
            type="file"
            name="imagen"
            accept="image/*"
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 my_button w-full"
          onClick={handleUpdateProduct}
        >
          Actualizar
        </button>

        {/* ToastContainer para mostrar las alertas */}
        <ToastContainer />
        <div className="relative">
          {/* ... Resto del código ... */}
          <Link
            to="/admin"
            className="text-white bg-black rounded-full p-3 fixed bottom-8 right-8"
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

export default ProductEdit;
