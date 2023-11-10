import React from "react";
import estilos from './productoCard.module.css';

const ProductoCard = ({ nombreP, precio ,imagenSrc, altImg}) => {
  // Combina la ruta base del servidor con la ruta relativa de la imagen
  // const imageUrl = `http://localhost:5173/uploads/${producto.image}`;
  return (
    <div className={`${estilos.productoCard} shadow-md overflow-hidden`}>
      <img src={imagenSrc} alt={altImg} />
      <div className={`${estilos.detalles}`}>
        <h1>{nombreP}</h1>
        <p>$: {precio} </p>
        <div className={`${estilos.contBotones}`}>
        <button className={`${estilos.botonComprar} flex justify-center bg-blue-600 items-center shadow-md my_button`}>
          Comprar
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      </div>
      
    </div>
  );
}

export default ProductoCard;
