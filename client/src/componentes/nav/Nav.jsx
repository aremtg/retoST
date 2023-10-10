import React from 'react'
import estilos from './nav.module.css'
import Logo from '../logo/Logo'
import UserProfile from '../userImgName/UserImgName'

function Nav() {
  return (
    <div className={estilos.contNav}>
      <Logo />
      <nav className={estilos.nav}>
        <ul className={estilos.navList}>
          <li className={estilos.navItem}>Inicio</li>
          <li className={estilos.navItem}>Aplicacion</li>
          <li className={estilos.navItem}>Galeria</li>
          <li className={estilos.navItem}>Mi perfil</li>
        </ul>
      </nav>
      <UserProfile username="Saremd" profileImage="src\images\foto.png" />
    </div>
  )
}

export default Nav