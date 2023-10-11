import estilos from './userImgName.module.css'
const UserProfile = ({ useruser, profileImage, className }) => {
  return (
    <div className={`${estilos.boxUser} ${className}`}>
      <img src={profileImage} alt="Foto de perfil" />
      <span >{useruser}</span>
    </div>
  );
}

export default UserProfile;
