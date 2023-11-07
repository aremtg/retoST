import React, { useState, useEffect } from "react";
import estilos from './home.module.css'
import axios from "axios";
import Box from "../../components/miniComponents/Box";
import ProductoCard from "../../components/miniComponents/ProductoCard";
import CategoriaSlider from "../../components/miniComponents/CategoriaSlider";

const Home = () => {
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
      <div className={`${estilos.contenedorProducts}`}>
      <ProductoCard
        nombreP='Portátil Dell Vostro 3405'
        imagenSrc='src/img/p1.png'
        precio='88'
      />
      <ProductoCard
        nombreP='Portátil HP 15-EF2517LA'
        imagenSrc='src/img/p2.png'
        precio='88'
      />
      <ProductoCard
        nombreP='Portatil Asus E1504fa'
        imagenSrc='src/img/p3.png'
        precio='88'
      />
      <ProductoCard
        nombreP='Portatil Lenovo Ryzen'
        imagenSrc='src/img/p4.png'
        precio='88'
      />
      <ProductoCard
        nombreP='Dell Inspiron 3511'
        imagenSrc='src/img/p5.png'
        precio='88'
      />
      <ProductoCard
        nombreP='Asus VivoBook'
        imagenSrc='src/img/p6.png'
        precio='88'
      />
      <ProductoCard
        nombreP='HP 245 G8 negra'
        imagenSrc='src/img/p7.png'
        precio='88'
      />
       <ProductoCard
        nombreP='Audífonos Jbl T110'
        imagenSrc='src/img/p8.png'
        precio='88'
      />
       <ProductoCard
        nombreP='Audífonos Inalámbricos Con Noise'
        imagenSrc='src/img/p9.png'
        precio='88'
      /> <ProductoCard
        nombreP='Audífonos Inalámbricos Wh-ch520'
        imagenSrc='src/img/p10.png'
        precio='88'
      />
        <ProductoCard
        nombreP='Audífonos Inalámbricos Con Noise'
        imagenSrc='src/img/p9.png'
        precio='88'
      /> <ProductoCard
        nombreP='Audífonos Inalámbricos Wh-ch520'
        imagenSrc='src/img/p10.png'
        precio='88'
      />
        <ProductoCard
        nombreP='Audífonos Inalámbricos Con Noise'
        imagenSrc='src/img/p9.png'
        precio='88'
      /> <ProductoCard
        nombreP='Audífonos Inalámbricos Wh-ch520'
        imagenSrc='src/img/p10.png'
        precio='88'
      />
      
      </div>
      
    </Box>

  );
};

export default Home;