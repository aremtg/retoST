const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('reto1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
