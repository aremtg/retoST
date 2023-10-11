
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
          <li className={estilos.navItem}><Link to="/">Inicio</Link></li>
          <li className={estilos.navItem}><Link to="/perfil">Perfil</Link></li>
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