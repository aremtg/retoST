import { Link } from 'react-router-dom'
import estilos from './logo.module.css'
const Logo = () => {
  return (
    <Link  to="/" >
      <h1 className={`${estilos.logoh1} text-blue-700	`}>TecnoShope</h1>
      {/* <img src="src/img/logo1.png"  className={`${className} ${estilos.logo}`} alt="logoST" /> */}
    </Link> 
  )
}

export default Logo