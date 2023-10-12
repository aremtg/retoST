
import Box from "../../components/miniComponents/Box";
import UserProfile from "../../components/userImgName/UserImgName";
import InfoCuenta from "./InfoCuenta";
import estilos from './profile.module.css'

const Profile = () => {
  const user = 'Pepe_123'
    return (
      <div>
        <h1 className="tituloPagina">Página de Perfil</h1>
        <Box>
          <UserProfile 
              useruser={user}
              profileImage="img/pfp_1.png"
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
  