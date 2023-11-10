import React, { useState, useEffect } from "react";
import estilos from './home.module.css'
import axios from "axios";
import Box from "../../components/miniComponents/Box";
import ProductoCard from "../../components/miniComponents/ProductoCard";
import CategoriaSlider from "../../components/miniComponents/CategoriaSlider";

const Home = () => {
  return (
    <Box>
      <CategoriaSlider />
      <br />
      <br />
      <div className={`${estilos.contenedorProducts} w-full flex justify-center bg-white py-3 rounded-xl flex-wrap gap-2`}>
      <ProductoCard
        nombreP='Monitor Vostro 3405'
        imagenSrc='src/img/p1.png'
        precio='2.400.999'
      />
      <ProductoCard
        nombreP='Torre 15-EF2517LA'
        imagenSrc='src/img/p2.png'
        precio='2.400.999'
      />
      <ProductoCard
        nombreP='Portatil Asus E1504fa'
        imagenSrc='src/img/p3.png'
        precio='2.500.999'
      />
      <ProductoCard
        nombreP='Portatil Lenovo Ryzen'
        imagenSrc='src/img/p4.png'
        precio='3.899.999'
      />
      <ProductoCard
        nombreP='Dell Inspiron 3511'
        imagenSrc='src/img/p5.png'
        precio='3.560.999'
      />
      <ProductoCard
        nombreP='Asus VivoBook'
        imagenSrc='src/img/p6.png'
        precio='1.300.000'
      />
      <ProductoCard
        nombreP='HP 245 G8 negra'
        imagenSrc='src/img/p7.png'
        precio='3.200.00'
      />
       <ProductoCard
        nombreP='Audífonos Jbl T110'
        imagenSrc='src/img/p8.png'
        precio='50.000'
      />
       <ProductoCard
        nombreP='Audífonos Inalámbricos Con Noise'
        imagenSrc='src/img/p9.png'
        precio='120.000'
      /> <ProductoCard
        nombreP='Audífonos Inalámbricos Wh-ch520'
        imagenSrc='src/img/p10.png'
        precio='80.000'
      />
        <ProductoCard
        nombreP='Audífonos Inalámbricos Con Noise'
        imagenSrc='src/img/p9.png'
        precio='95.999'
      /> <ProductoCard
        nombreP='Audífonos Inalámbricos Wh-ch520'
        imagenSrc='src/img/p10.png'
        precio='150.000'
      />
        <ProductoCard
        nombreP='Audífonos Inalámbricos Con Noise'
        imagenSrc='src/img/p9.png'
        precio='89.999'
      /> <ProductoCard
        nombreP='Audífonos Inalámbricos Wh-ch520'
        imagenSrc='src/img/p10.png'
        precio='100.000'
      />
      
      </div>
      
    </Box>

  );
};

export default Home;