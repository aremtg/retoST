import React from "react";
import estilos from './productoCard.module.css';

const ProductoCard = ({ nombreP, precio ,imagenSrc, altImg}) => {
  // Combina la ruta base del servidor con la ruta relativa de la imagen
  // const imageUrl = `http://localhost:5173/uploads/${producto.image}`;
  return (
    <div className={`${estilos.productoCard} shadow-md overflow-hidden rounded-lg border border-gray-200`}>
  <img src={imagenSrc} alt={altImg} className="w-full h-64 object-cover" />
  <div className={`${estilos.detalles} p-4`}>
    <h1 className="text-xl font-bold mb-2">{nombreP}</h1>
    <p className="text-gray-700 font-medium mb-2">$ {precio}</p>
    <div className={`${estilos.contBotones}`}>
      <button className={`${estilos.botonComprar} flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
        Comprar
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  </div>
</div>
  );
}

export default ProductoCard;
