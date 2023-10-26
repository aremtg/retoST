import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import estilos from '../forms.module.css';
import Box from '../../../components/miniComponents/Box';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        // Almacenar el token en el almacenamiento local
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        const data = await response.json();
        setError(data.message || 'Error interno del servidor');
      }
    } catch (error) {
      console.error('Error de inicio de sesión: ' + error);
    }
  }

  return (
    <Box>
      <form className={estilos.form}>
        <h1>Login</h1>
        {error && <div className={estilos.error}>{error}</div>}
        <div className={`${estilos.control} control`}>
          Correo Electrónico:
          <label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div className={`${estilos.control} control`}>
          Contraseña:
          <label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>

        <div className={estilos.divBtnForm}>
          <button type="button" className={`shadow-md my_button`} onClick={handleLogin}>
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
  );
}

export default Login;
