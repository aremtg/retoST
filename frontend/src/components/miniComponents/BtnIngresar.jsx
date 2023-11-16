import { Link } from 'react-router-dom';
import estilos from './BtnIngresar.module.css'
import { ClassNames } from '@emotion/react';
const BtnIngresar = ({ useruser, classNameBoxUser, classNameSpan}) => {
  return (
      <div className={` ${estilos.boxUser} ${classNameBoxUser}`}>
        <span className={`${classNameSpan} shadow-md px-1 py-1`} >{useruser}</span>
      </div>
  
  );
}

export default BtnIngresar;
