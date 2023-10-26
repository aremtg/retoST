import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import estilos from './nav.module.css';
import Logo from './Logo';
import UserProfile from '../miniComponents/UserImgName';

const Nav = () => {
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
      <div className={`${estilos.contNav} flex items-center shadow-md`}>
        <Logo className={estilos.logo} />
        <nav className={estilos.nav}>
          <div className={`${estilos.buscador}`}>
            <input type="search" name="" id="" placeholder='Buscar...' />
          </div>
        </nav>
        <Link to="/cart" className={`${estilos.contCarrito} text-center shadow-md`}>
          {/* Contenido del carrito */}
        </Link>
        <Link to={isAuthenticated ? "/profile" : "/login"} className={estilos.link}>
          <UserProfile
            useruser={isAuthenticated ? 'Perfil' : 'Ingresar'}
            srcProfileImage="src/img/user_icon.jpg"
            classNameBoxUser={`${estilos.boxUserNav} boxUserNav`}
            classNameContImg={estilos.contImg}
          />
        </Link>
        <button className={estilos.btnMenu}>
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
