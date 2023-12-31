import React, { useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./nav.module.css";
import Logo from "./Logo";
import MyBoton from "../miniComponents/MyBoton";

const Nav = () => {
  const [activo, setActivo] = useState(false);

  const toggleActivo = () => {
    setActivo(!activo);
  };

  let [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para iniciar sesión. Esto podría ser llamado cuando el usuario se loguea con éxito.
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Función para cerrar sesión.
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <div
        className={`${estilos.contNav} ${activo ? estilos.activo : ""
          } flex items-center shadow-md justify-between m-auto py-10 px-7`}
      >
        <Logo className={estilos.logo} />
        <div className={`${estilos.buscador} w-6/12 justify-center items-center`}>
          <input
            className="px-2 py-1"
            type="search"
            name=""
            id=""
            placeholder="Buscar..."
          />
        </div>
        <MyBoton
          className={`${estilos.contCarrito} relative text-center px-1 py-1 shadow-md`}
          linkTo="/cart"
          children={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div className="absolute bottom-6 left-6 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold">
                0
              </div>
            </>
          }
        />
        <div className={`${estilos.desaparece}`}>
          {/*  */}
          <MyBoton
            className={`${estilos.boton} flex justify-center items-center bg-black text-white py-2 px-4 shadow-md hover:bg-slate-800 my_button`}
            text="Ingresar"
            linkTo={isAuthenticated ? "/profile" : "/login"}
            children={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            }
          />
        </div>

        <button
          className={`${estilos.btnMenu} ${activo ? estilos.open : ""}`}
          onClick={toggleActivo}
        >
          <span className={estilos.bar1}></span>
          <span className={estilos.bar2}></span>
          <span className={estilos.bar3}></span>
        </button>
      </div>
      <br />
      <br />
    </>
  );
};

export default Nav;
