import { Link } from 'react-router-dom';
import estilos from './buttonLink.module.css'

const ButtonLink = ({ to, className ,texto}) => {
    return (
       <Link  to={to} >
        <button className={`${className}`}>
            {texto}
            
        </button>
       </Link>
    );
}

export default ButtonLink;