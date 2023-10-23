import React from "react";
import estilos from './productoCard.module.css';

const ProductoCard = ({ producto }) => {
  // Combina la ruta base del servidor con la ruta relativa de la imagen
  const imageUrl = `http://localhost:5173/uploads/${producto.image}`;

  return (
    <div className={`${estilos.productoCard} shadow-md`}>
      <img src={imageUrl} alt={producto.name} />
      <h1>{producto.name}</h1>
      <p>Precio: ${producto.price}</p>
      <button className={`${estilos.botonAgregar} shadow-md my_button`}>
        Agregar
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}

export default ProductoCard;
