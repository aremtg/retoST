import React from 'react'
import './nav.css'
import Logo from '../logo/Logo'
import UserProfile from '../userImgName/UserImgName'

function Nav() {
  return (
    <div className='contNav'>
      <Logo />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Aplicacion</li>
          <li className="nav-item">Galeria</li>
          <li className="nav-item">Mi perfil</li>
        </ul>
      </nav>
      <UserProfile username="Saremd" profileImage="src\images\foto.png" />
    </div>
  )
}

export default Nav