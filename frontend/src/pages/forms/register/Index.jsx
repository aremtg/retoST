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
    <Box>
      <form className={estilos.form}>
        <h1>Regístrate</h1>
        <div className={`${estilos.control} control`}>
          Correo:
          <label>
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
        </div>
        <div className={`${estilos.control} control`}>
          Contraseña:
          <label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={estilos.divBtnForm}>
          <button
            type="button"
            className={`shadow-md my_button`}
            onClick={handleRegistration}
          >
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
  );
}

export default Register;
