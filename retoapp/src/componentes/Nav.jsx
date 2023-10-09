import { Link } from 'react-scroll'
import Logo from './logo'

const Nav = () => {
    const contenido = <>
    <div className=''>
      <ul>
        <Link to="AyudaYSoporte">
          <li>ayuda y soporte</li>
        </Link>
        <Link to="BandejaDeEntrada">
          <li>Bandeja de tareas</li>
        </Link>
        <Link to="LMS">
          <li>LMS Sena</li>
        </Link>
        <Link to="CambiarClave">
          <li>Cambiar clave</li>
        </Link>
        <Link to="Salir">
          <li>Salir</li>
        </Link>
      </ul>
    </div>
    </>
    return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-black lg:py-5 px-20'>
        <Logo/>
        <div className='lg:flex md:flex lg: flex-1 items-center justify-end'>
          <div>
            <ul>
              <Link to="AyudaYSoporte">
                <li>ayuda y soporte</li>
              </Link>

              <Link to="BandejaDeEntrada">
                <li>Bandeja de tareas</li>
              </Link>

              <Link to="LMSSena">
                <li>LMS Sena</li>
              </Link>

              <Link to="CambiarClave">
                <li>Cambiar clave</li>
              </Link>

              <Link to="Salir">
                <li>Salir</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <NomUsuario />
    </nav>
    
  )
}

export default Nav