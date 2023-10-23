import { Link } from 'react-router-dom';
import estilos from './nav.module.css'
import Logo from './Logo'
import UserProfile from '../miniComponents/UserImgName'
import { useState } from 'react';
const Nav = () => {
  const [estadoMenu, setMenuEstado] = useState(false);

  const abrirMenu = () => {
    setMenuEstado(!estadoMenu);
  };

  return (
    <>
      <div className={`${estilos.contNav} flex items-center shadow-md ${estadoMenu ? estilos.active : ''}`}>
        <Logo className={estilos.logo} />
        <nav className={estilos.nav}>
          <div className={`${estilos.buscador}`}>
              <input type="search" name="" id="" placeholder='Buscar...' />
            </div>
            
         
        </nav>
        <Link to="/cart" className={`${estilos.contCarrito} text-center shadow-md`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </Link>
        <Link to="/login" className={estilos.link}>
          <UserProfile
            useruser={'Ingresar'}
            srcProfileImage="src/img/user_icon.jpg"
            classNameBoxUser={`${estilos.boxUserNav} boxUserNav`}
            classNameContImg={estilos.contImg}
          />
        </Link>
         
        <button className={`${estilos.btnMenu} ${estadoMenu ? estilos.open : ''}`} onClick={abrirMenu}>
          <span className={estilos.bar1}></span>
          <span className={estilos.bar2}></span>
          <span className={estilos.bar3}></span>
        </button>
       

      </div>
      <br />
      <br />
    </>
  )
}

export default Nav

