import { Link } from 'react-router-dom'
import Box from '../../../components/miniComponents/Box'
import estilos from './register.module.css'
function Register() {
  return (
    <Box>
        <form action="" className={estilos.form}>
            <>
                <h1>Registrate</h1>
            </>
            
            <div className={`${estilos.control} control`}>User name
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <div className={`${estilos.control} control`}>Name
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div><div className={`${estilos.control} control`}>Email
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <div className={`${estilos.control} control`}>Password
                <label htmlFor="">
                    <input type="password"/>
                </label>
            </div>

            <div className={estilos.divBtnForm}>
                <button className={`shadow-md my_button`}>
                    Registrarme
                </button>
            </div>
            <div className='flex items-center justify-center'>
                <Link to='/login' className={`${estilos.myLink}`}>
                    Ya tengo cuenta, "Ingresar".
                </Link> 
            </div>
        </form>
    </Box>
  )
}

export default Register