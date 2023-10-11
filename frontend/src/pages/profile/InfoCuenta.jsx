import estilos from './profileInfoCuenta.module.css'
const InfoCuenta = ({ useruser, username, lastname, usercorreo, className }) => {
  return (
    <div className={`${estilos.boxInfoCuenta} ${className}`}>
      <label htmlFor="">Usuario: <span  className='resaltar'>{useruser}</span></label>
      <label htmlFor="">Nombres: <span>{username}</span></label>
      <label htmlFor="">Apellidos: <span>{lastname}</span></label>
<label htmlFor="">Correo: <span>{usercorreo}</span></label>
      
    </div>
  );
}

export default InfoCuenta;