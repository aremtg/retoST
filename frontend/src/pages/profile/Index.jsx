
import Box from "../../components/miniComponents/Box";
import UserProfile from "../../components/miniComponents/UserImgName";
import InfoCuenta from "./InfoCuenta";
import estilos from './profile.module.css'

const Profile = () => {
  const user = 'Pepe_123'
    return (
      <>
        <div className="contCentrado">
          <UserProfile 
              useruser={user}
              srcProfileImage="src/img/user_icon.jpg"
              classNameBoxUser={estilos.boxUser}
              classNameContImg={estilos.contImg}
          />
          <InfoCuenta
              useruser={user}
              username="Tatiana" 
              lastname="Guzman"
              usercorreo="pepe@gmail.com" 
          />
        </div>
        <br />
        <Box>
            <h1>Un titulo para algo</h1>

        </Box>        
      </>
    );
  }
  
  export default Profile;
  