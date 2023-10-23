import { Link } from 'react-router-dom'
import estilos from '../forms.module.css'
import Box from '../../../components/miniComponents/Box'
function Login() {
  return (
   <Box>
        <form action="" className={estilos.form}>
            <h1>Login</h1>
            <div className={`${estilos.control} control`}>Nombre de usuario:
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <div className={`${estilos.control} control`}>Contraseña:
                <label htmlFor="">
                    <input type="password"/>
                </label>
            </div>

            <div className={estilos.divBtnForm}>
                <button className={`shadow-md my_button`}>
                    Ingresar
                </button>
            </div>
            <div className='flex items-center justify-center'>
                <Link to='/register' className={`${estilos.myLink}`}>
                    No tengo cuenta, "Registrarme".
                </Link> 
            </div>
        </form>
   </Box>
)
}

export default Login