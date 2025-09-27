const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'mydb',      // Database name
  process.env.DB_USER || 'root',      // Database username
  process.env.DB_PASS || '',          // Database password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // set true if you want to see SQL logs
  }
);

module.exports = sequelize;
