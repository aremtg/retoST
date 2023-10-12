import React, { useState, useEffect } from "react";
import axios from "axios";
import Caja from "../../components/caja/Caja";
import ProductoCard from "../../components/contenido/ProductoCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a tu servidor para obtener la lista de productos
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="tituloPagina">Página de Inicio</h1>
      <Caja>
        <div className="contedorFlex">
          {products.map((product) => (
            <ProductoCard
              key={product.id}
              producto={product}
            />
          ))}
        </div>
      </Caja>
    </div>
  );
};

export default Home;
