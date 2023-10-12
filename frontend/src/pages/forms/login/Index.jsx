import Box from '../../../components/miniComponents/Box'
import ButtonLink from '../../../components/miniComponents/ButtonLink'
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
                <ButtonLink
                    to='/login'
                    texto='Login'
                    className='my_button'
                />
                <ButtonLink
                    to='/register'
                    texto='Ya tengo cuenta'
                    className='myLink'
                />   
            </div>
            
        </form>
    </Box>
)
}

export default Login