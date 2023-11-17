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
    <Box className={estilos.box}>
     <form className={`${estilos.form} max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl flex flex-col gap-4`}>
  <h1 className="text-2xl font-bold text-center">Login</h1>
  {error && <div className={`${estilos.error} bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md`}>{error}</div>}

  <div className={`${estilos.control} flex flex-col`}>
    <label className="mb-1">Correo: </label>
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="py-2 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className={`${estilos.control} flex flex-col`}>
    <label className="mb-1">Contraseña:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="py-2 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className={estilos.divBtnForm}>
    <button
      type="button"
      className={`bg-black text-white py-2 px-4 shadow-md hover:bg-slate-800 focus:outline-none focus:ring focus:border-blue-700 my_button`}
      onClick={handleLogin}
    >
      Ingresar
    </button>
  </div>

  <div className="flex items-center justify-center">
    <Link to="/register" className={`${estilos.myLink} text-blue-500 hover:underline`}>
      No tengo cuenta, "Registrarme".
    </Link>
  </div>
</form>

    </Box>
  );
}

export default Login;
