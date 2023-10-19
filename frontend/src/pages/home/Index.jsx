import React, { useState, useEffect } from "react";
import estilos from './home.module.css'
import axios from "axios";
import Box from "../../components/miniComponents/Box";
import ProductoCard from "../../components/miniComponents/ProductoCard";
import Logo from "../../components/nav/Logo";

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
        Bienvenido, <strong>Usuario</strong>
      </h1>
     
      <img src="src/img/nuevo.png" alt="" className={`${estilos.imgFlotante}`}/>
    </div>
      <br />
    <div className={`${estilos.categorias} shadow-md`}>
      <ul>
        <li>Portatiles</li>
        <li>Accesorios</li>
        <li>Ca3</li>
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
            <div>aqui habran productos</div>
      </Box>
    </>
  );
};

export default Home;