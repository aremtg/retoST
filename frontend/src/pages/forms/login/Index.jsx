import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import estilos from '../forms.module.css';
import Box from '../../../components/miniComponents/Box';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Verifica si el usuario es 'Admin' y la contraseña es 'Admin'
      if (email === 'Admin' && password === 'Admin') {
        // Redirige a /admin
        navigate('/admin');
        return;
      }

      // Si no es 'Admin', realiza la lógica normal de inicio de sesión
      // ...

      // Muestra una alerta de error si el usuario no es 'Admin'
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Usuario no encontrado',
      });
    } catch (error) {
      console.error('Error de inicio de sesión: ' + error);
    }
  };

  return (
    <Box className={estilos.box}>
      <form className={`${estilos.form} max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl flex flex-col gap-4`}>
        <h1 className="text-2xl font-bold text-center">Login</h1>

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
