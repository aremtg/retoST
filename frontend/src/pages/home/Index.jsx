import React, { useState, useEffect } from "react";
import estilos from './home.module.css'
import axios from "axios";
import Box from "../../components/miniComponents/Box";
import ProductoCard from "../../components/miniComponents/ProductoCard";
import CategoriaSlider from "../../components/miniComponents/CategoriaSlider";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a tu servidor para obtener la lista de productos
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Box>
      {/* <div className={`${estilos.hero} shadow-md`}>
        <img
          src="src/img/nuevo.png"
          alt=""
          className={`${estilos.imgFlotante}`}
        />
      </div> */}
      <CategoriaSlider />
      <br />
      <br />
        <div className={`${estilos.contenedorProducts} container mx-auto grid gap-x-8 gap-y-4 grid-cols-4`}>
          {/* {products.map((product) => (
            <ProductoCard key={product.id} producto={product} />
          ))} */}
        </div>
    </Box>
      
  );
};

export default Home;