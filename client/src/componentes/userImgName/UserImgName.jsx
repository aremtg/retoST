import './userImgName.css'
const UserProfile = ({ username, profileImage }) => {
  return (
    <div className="user-profile">
      <img src={profileImage} alt="Foto de perfil" />
      <span>{username}</span>
    </div>
  );
}

export default UserProfile;
