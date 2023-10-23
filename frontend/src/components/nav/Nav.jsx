import { Link } from 'react-router-dom';
import estilos from './nav.module.css'
import Logo from './Logo'
import UserProfile from '../miniComponents/UserImgName'
import { useState } from 'react';
const Nav = () =>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  const [estadoMenu, setMenuEstado] = useState(false);

  const abrirMenu = () => {
    setMenuEstado(!estadoMenu);
  };

  return (
    <>
    <div className={`${estilos.contNav} flex items-center shadow-md ${estadoMenu ? estilos.active : ''}`}>
        <Logo className={estilos.logo}  />
        <nav className={estilos.nav}>
          <ul className={`${estilos.navList} flex gap-2`}>
            <div className={`${estilos.buscador}`}>
              <input type="search" name="" id="" placeholder='Buscar...' />
            </div>
            <li ><Link to="/" className={`${estilos.linkItem} text-center	rounded-full shadow-md`}>Inicio</Link></li>
            <li ><Link to="/profile" className={`${estilos.linkItem} text-center rounded-full shadow-md`}>Perfil</Link></li>
            <li ><Link to="/carrito" className={`${estilos.linkItem} text-center rounded-full shadow-md`}></Link></li>
          </ul>
        </nav>
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
      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
    </span>
      <br />
    </>
  )
}

export default Nav

