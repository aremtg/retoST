import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '../../../components/miniComponents/Box';
import estilos from '../forms.module.css';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data.message);
        // Puedes redirigir al usuario a la página de inicio de sesión o a donde desees.
      } else {
        const errorData = await response.json();
        console.log('Error en el registro:', errorData.message);
      }
    } catch (error) {
      console.error('Error de registro:', error);
    }
  };
  
  

  return (
    <Box className={estilos.box}>
      <form className={`${estilos.form} max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl flex flex-col gap-4`}>
  <h1 className="text-2xl font-bold text-center mb-4">Regístrate</h1>

  <div className={`${estilos.control}  flex flex-col`}>
    <label className="mb-1">Correo:</label>
    <input
      type="text"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="py-2 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className={`${estilos.control}  flex flex-col`}>
    <label className="mb-1">Contraseña:</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      className="py-2 px-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className={estilos.divBtnForm}>
    <button
      type="button"
      className={`bg-blue-700 text-white py-2 px-4 shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 my_button`}
      onClick={handleRegistration}
    >
      Registrarme
    </button>
  </div>

  <div className="flex items-center justify-center">
    <Link to="/login" className={`${estilos.myLink} text-blue-500 hover:underline`}>
      Ya tengo cuenta, "Ingresar".
    </Link>
  </div>
</form>

    </Box>
  );
}

export default Register;
