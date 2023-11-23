import React from 'react';
import estilos from './footer.module.css'
import Logo from '../nav/Logo';

const  Footer =() =>{
  return (
      <div className={`${estilos.footer}`}>
        <ul>
          <span>&copy;
            <Logo className={`${estilos.logoF}`} />
            </span>
          <a href="">
            <img src="/src/img/facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/src/img/instagram.svg" alt="" />
          </a>
          <a href="">
            <img src="/src/img/whatsapp.svg" alt="" />
          </a>
        </ul>
      </div>
  );
}

export default Footer;