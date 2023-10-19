
import Box from "../../components/miniComponents/Box";
import UserProfile from "../../components/miniComponents/UserImgName";
import InfoCuenta from "./InfoCuenta";
import estilos from './profile.module.css'

const Profile = () => {
  const user = 'Pepe_123'
    return (
      <div>
        <Box>
          <UserProfile 
              useruser={user}
              profileImage="src/img/user_icon.jpg"
              className={estilos.boxUser}
          />
          <InfoCuenta
              useruser={user}
              username="Tatiana" 
              lastname="Guzman"
              usercorreo="pepe@gmail.com" 
          />
        </Box>
        <br />
        <Box>
            <h1>Un titulo para algo</h1>

        </Box>        
      </div>
    );
  }
  
  export default Profile;
  