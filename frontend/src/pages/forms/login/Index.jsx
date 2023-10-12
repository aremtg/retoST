import Box from '../../../components/miniComponents/Box'
import estilos from './login.module.css'
function Login() {
  return (
    <Box>
        <form action="">
            <h1>login</h1>
            <div className={estilos.control}>User name
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <div className={estilos.control}>Password
                <label htmlFor="">
                    <input type="password"/>
                </label>
            </div>

            <div className={estilos.divBtnForm}>
                <button className="my_button">
                    Login
                </button>
            </div>
        </form>
        
    </Box>
  )
}

export default Login