import React, { useState, useEffect } from "react";
import axios from "axios";
import Caja from "../../components/caja/Caja";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a tu servidor para obtener la lista de productos
    axios.get("http://localhost:3000/products").then((response) => {
      setProductos(response.data);
      console.log(response.data); // Agrega esto para verificar si los datos se están recuperando

    });
  }, []);

  return (
    <div>
      <h1 className="tituloPagina">Página de Inicio</h1>
      


      <Caja>
        <div className="contedorFlex">
            <ProductoCard
              producto={{
                nombre: 'Producto 1',
                imagen: 'src/images/compu.jpg',
                especificaciones: 'Especificaciones del producto 1',
                precioVenta: 100
              }}
              
            />
            <ProductoCard
              producto={{
                nombre: 'Producto 2',
                imagen: 'src/images/compu.jpg',
                especificaciones: 'Especificaciones del producto 1',
                precioVenta: 100
              }}
              
            />
            <ProductoCard
              producto={{
                nombre: 'Producto 2',
                imagen: 'src/images/compu.jpg',
                especificaciones: 'Especificaciones del producto 1',
                precioVenta: 100
              }}
              
            />
            
          </div>
        </Caja>
      {/* <Caja>
        {productos.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.name}</h3>
            <p>Precio: {producto.price}</p>
            <p>Stock: {producto.stock}</p>
          </div>
        ))}
      </Caja> */}
    </div>
  );
};

export default Home;
