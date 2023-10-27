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
        nombreP='producto1'
        imagenSrc='src/img/p1.png'
        precio='88'
      />
      <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/p2.png'
        precio='88'
      />
      <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/p3.png'
        precio='88'
      />
      <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/p4.png'
        precio='88'
      />
      <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/p5.png'
        precio='88'
      />
      <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/p6.png'
        precio='88'
      />
      <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/nuevo.png'
        precio='88'
      />
       <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/nuevo.png'
        precio='88'
      />
       <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/nuevo.png'
        precio='88'
      /> <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/nuevo.png'
        precio='88'
      />
       <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/nuevo.png'
        precio='88'
      />
       <ProductoCard
        nombreP='producto1'
        imagenSrc='src/img/nuevo.png'
        precio='88'
      />
      </div>
      
    </Box>

  );
};

export default Home;