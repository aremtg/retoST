
import { Link } from 'react-router-dom';
import estilos from './nav.module.css'
import Logo from './Logo'
import UserProfile from '../userImgName/UserImgName'

const Nav = () =>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  
  return (
    <>
    <div className={estilos.contNav}>
        <Logo />
        <nav className={estilos.nav}>
          <ul className={estilos.navList}>
            <li ><Link to="/" className={estilos.linkItem}>Home</Link></li>
            <li ><Link to="/profile" className={estilos.linkItem}>Profile</Link></li>
          </ul>
        </nav>
        
        <UserProfile 
          useruser="Ingresar" 
          profileImage="src/img/user_icon.jpg"
        />
      </div>
      <br />
    </>
  )
}

export default Nav

