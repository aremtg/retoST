const db = require('../db');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const registerUser = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { email, password } = req.body;

    // Validar si el usuario ya existe en la base de datos
    const [existingUsers] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Generar el hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear un nuevo usuario
    const newUser = new User(email, hashedPassword);

    // Insertar el nuevo usuario en la base de datos
    const result = await db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [
      newUser.email,
      newUser.password,
    ]);

    if (result[0].affectedRows === 1) {
      res.status(200).json({ message: 'Registro exitoso' });
    } else {
      res.status(500).json({ message: 'Error al registrar el usuario' });
    }
  } catch (error) {
    console.error('Error en el registro: ' + error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { registerUser };
