import React from "react";
import estilos from './productoCard.module.css';

const ProductoCard = ({ producto }) => {
  // Combina la ruta base del servidor con la ruta relativa de la imagen
  const imageUrl = `http://localhost:5173/uploads/${producto.image}`;

  return (
    <div className={estilos.productoCard}>
      <img src={imageUrl} alt={producto.name} />
      <h3>{producto.name}</h3>
      <p>Precio: ${producto.price}</p>
      <button className={`${estilos.botonAgregar} my-button`}>Agregar</button>
    </div>
  );
}

export default ProductoCard;
