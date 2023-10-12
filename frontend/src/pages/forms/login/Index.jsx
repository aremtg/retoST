import estilos from './login.module.css'

function Login() {
  return (
    <>
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

            <div className={estilos.btnForm}>
                <button>
                    Login
                </button>
            </div>
        </form>
    </>
  )
}

export default Login