import React, { useState, useEffect } from "react";
import estilos from './home.module.css'
import Box from "../../components/miniComponents/Box";
import ProductoCard from "../../components/miniComponents/ProductoCard";
import CategoriaSlider from "../../components/miniComponents/CategoriaSlider";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a tu API para obtener los productos
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Box>
      <CategoriaSlider />
      <br />
      <br />
      <div className={`${estilos.contenedorProducts} w-full flex justify-center bg-white py-3 rounded-xl flex-wrap gap-2`}>
        {products.map((product) => (
          <ProductoCard
            key={product.id}
            nombreP={product.nombre}
            imagenSrc={`/uploads/${product.imagen}`}
            precio={product.precio}
          />
        ))}
      </div>
    </Box>
  );
};

export default Home;
