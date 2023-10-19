import { Link } from 'react-router-dom'
import estilos from './logo.module.css'
const Logo = ({className}) => {
  return (
    <Link  to="/" >
      <h1 className={estilos.logoh1}>TecnoShope</h1>
      {/* <img src="src/img/logo1.png"  className={`${className} ${estilos.logo}`} alt="logoST" /> */}
    </Link> 
  )
}

export default Logo