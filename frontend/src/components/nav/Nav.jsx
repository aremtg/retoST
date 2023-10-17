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
            <li ><Link to="/" className={`${estilos.linkItem} text-center	rounded-full shadow-md`}>Home</Link></li>
            <li ><Link to="/profile" className={`${estilos.linkItem} text-center rounded-full shadow-md`}>Profile</Link></li>
          </ul>
        </nav>
        <Link to="/login" className={estilos.link}>
          <UserProfile
            className={estilos.boxUserNav}
            useruser="Ingresar" 
            profileImage="src/img/user_icon.jpg"
          />
        </Link>
        <button className={`${estilos.btnMenu} ${estadoMenu ? estilos.open : ''}`} onClick={abrirMenu}>
          <span className={estilos.bar1}></span>
          <span className={estilos.bar2}></span>
          <span className={estilos.bar3}></span>
        </button>
      </div>
      
      <br />
    </>
  )
}

export default Nav

