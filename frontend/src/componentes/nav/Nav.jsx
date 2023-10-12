
import { Link } from 'react-router-dom';

import estilos from './nav.module.css'
import Logo from './Logo'
import UserProfile from '../userImgName/UserImgName'

const Nav = () =>{
  
  return (
    <div className={estilos.contNav}>
      <Logo />
      <nav className={estilos.nav}>
        <ul className={estilos.navList}>
          <li ><Link to="/" className={estilos.linkItem}>Inicio</Link></li>
          <li ><Link to="/perfil" className={estilos.linkItem}>Perfil</Link></li>
        </ul>
      </nav>
      <UserProfile 
        useruser="Pepe_123" 
        profileImage="src\images\foto.png"
      />
    </div>
  )
}

export default Nav

