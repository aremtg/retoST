import { Link } from 'react-router-dom'
import estilos from './logo.module.css'
const Logo = ({className}) => {
  return (
    <Link  to="/" >
      {/* <h1 className={`${estilos.logoh1}`}>TecShope</h1> */}
      <img src="src/img/logoNavidad.png"  className= {`${estilos.logo} ${className}`} alt="logo" />
    </Link> 
  )
}

export default Logo