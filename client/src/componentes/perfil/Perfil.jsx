import UserProfile from "../userImgName/UserImgName";
import InfoCuenta from "./InfoCuenta";
import estilos from './perfil.module.css'
import Caja from "../caja/Caja";

const Perfil = () => {
  const user = 'Pepe_123'
    return (
      <div>
        <h1 className="tituloPagina">Página de Perfil</h1>
        <Caja>
          <UserProfile 
              useruser={user}
              profileImage="src\images\foto.png"
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
        {/* Contenido de la página de perfil */}
        
      </div>
    );
  }
  
  export default Perfil;