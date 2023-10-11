import UserProfile from "../../components/userImgName/UserImgName";
import InfoCuenta from "./InfoCuenta";
import estilos from './profile.module.css'
import Caja from "../../components/caja/Caja";

const Profile = () => {
  const user = 'Pepe_123'
    return (
      <div>
        <h1 className="tituloPagina">Página de Perfil</h1>
        <Caja>
          <UserProfile 
              useruser={user}
              profileImage="public/img/pfp_1.png"
              className={estilos.boxUser}
          />
          <InfoCuenta
              useruser={user}
              username="Tatiana" 
              lastname="Guzman"
              usercorreo="pepe@gmail.com" 
          />
        </Caja>
        <br />
        <Caja>
            <h1>Un titulo para algo</h1>

        </Caja>        
      </div>
    );
  }
  
  export default Profile;
  