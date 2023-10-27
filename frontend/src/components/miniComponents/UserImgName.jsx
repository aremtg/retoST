import { Link } from 'react-router-dom';
import estilos from './userImgName.module.css'
import { ClassNames } from '@emotion/react';
const UserProfile = ({ useruser, srcProfileImage, classNameBoxUser, classNameContImg, classNameSpan}) => {
  return (
      <div className={` ${estilos.boxUser} ${classNameBoxUser}`}>
        <div className={`${estilos.contImg} ${classNameContImg}`}>
          <img src={srcProfileImage} alt="Foto de perfil" />
        </div>
        <span className={`${classNameSpan} shadow-md px-1 py-1`} >{useruser}</span>
      </div>
  
  );
}

export default UserProfile;
