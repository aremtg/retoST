
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
        </ul>
      </nav>
      <Link to="/profile">
      <UserProfile 
        useruser="Pepe" 
        profileImage="public/img/pfp_1.png"
      />
      </Link>
      
    </div>
  )
}

export default Nav