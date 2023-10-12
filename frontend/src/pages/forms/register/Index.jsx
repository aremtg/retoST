import Box from '../../../components/miniComponents/Box'
import estilos from './register.module.css'
function Register() {
  return (
    <Box>
        <form action="">
            <h1>login</h1>
            <div className={estilos.control}>User name
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <div className={estilos.control}>Name
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div><div className={estilos.control}>Email
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
                    Register
                </button>
            </div>
        </form>
    </Box>
  )
}

export default Register