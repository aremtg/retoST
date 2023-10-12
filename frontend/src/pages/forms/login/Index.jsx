

function Login() {
  return (
    <>
        <form action="">
            <h1>login</h1>
            <div className="control">User name
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <div className="control">Password
                <label htmlFor="">
                    <input type="password"/>
                </label>
            </div>

            <div className="btnForm">
                <button>
                    Login
                </button>
            </div>
        </form>
    </>
  )
}

export default Login