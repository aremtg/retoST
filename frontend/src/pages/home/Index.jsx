import React, { useState, useEffect } from "react";
import estilos from './home.module.css'
import axios from "axios";
import Box from "../../components/miniComponents/Box";
import ProductoCard from "../../components/miniComponents/ProductoCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a tu servidor para obtener la lista de productos
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
    <div className={`${estilos.hero}`}>
      <h1 className="text-center">
        Nuevo producto en  la tienda (pendiente)
      </h1>
      <img src="src/img/nuevo.png" alt="" className={`${estilos.imgFlotante}`}/>
    </div>
        <div className={`${estilos.categorias} shadow-md rounded-full`}>
          <ul className=" flex items-center justify-center">
            <li>Ca1</li>
            <li>Ca2</li>
            <li>Ca3</li>
          </ul>
        </div>
      <Box>
        
        <div className="contedorFlex">
          {products.map((product) => (
            <ProductoCard
              key={product.id}
              producto={product}
            />
          ))}
        </div>
      </Box>
    </>
  );
};

export default Home;