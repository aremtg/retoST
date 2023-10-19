import { Link } from 'react-router-dom';
import estilos from './userImgName.module.css'
const UserProfile = ({ useruser, srcProfileImage, classNameBoxUser, classNameContImg }) => {
  return (
      <div className={` ${estilos.boxUser} ${classNameBoxUser}`}>
        <div className={`${estilos.contImg} ${classNameContImg}`}>
          <img src={srcProfileImage} alt="Foto de perfil" />
        </div>
        <span className={`shadow-md`} >{useruser}</span>
      </div>
  
  );
}

export default UserProfile;
