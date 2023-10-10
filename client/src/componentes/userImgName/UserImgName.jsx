import estilos from './userImgName.module.css'
const UserProfile = ({ username, profileImage }) => {
  return (
    <div className={estilos.boxUser}>
      <img src={profileImage} alt="Foto de perfil" />
      <span>{username}</span>
    </div>
  );
}

export default UserProfile;
