import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductoCard from "../../components/contenido/ProductoCard";
import Box from "../../components/miniComponents/Box";
const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a tu servidor para obtener la lista de productos
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProductos(response.data);
      console.log(response.data); // Agrega esto para verificar si los datos se están recuperando

    });
  }, []);

  return (
    <div>
      <br />      
      <Box>
        <div className="contedorFlex">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={{
                nombre: productos.nombre,
                imagen: producto.imagen,
                precioVenta: producto.precioVenta
              }}
            />
          ))}
        </div>
      </Box>
      {/* <Box>
        {productos.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.name}</h3>
            <p>Precio: {producto.price}</p>
            <p>Stock: {producto.stock}</p>
          </div>
        ))}
      </Box> */}
    </div>
  );
};

export default Home;
