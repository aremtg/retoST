import { Link } from 'react-router-dom';
import estilos from './userImgName.module.css'
const UserProfile = ({ useruser, profileImage, className }) => {
  return (
    <Link to="/profile" className={estilos.link}>
      <div className={`${estilos.boxUser} ${className}`}>
        <img src={profileImage} alt="Foto de perfil" />
        <span >{useruser}</span>
      </div>
    </Link>
  );
}

export default UserProfile;
