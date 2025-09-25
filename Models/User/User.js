// const db = require("../DB/db"); 

// // Model for User
// const User = {
//   create: (userData, callback) => {
//     const { name, email, password } = userData;
//     db.query(
//       'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
//       [name, email, password],
//       callback
//     );
//   },

//   findByEmail: (email, callback) => {
//     db.query('SELECT * FROM users WHERE email = ?', [email], callback);
//   },

//   getAll: (callback) => {
//     db.query('SELECT * FROM users', callback);
//   }
// };

// module.exports = User;



// models/User.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../index.js'; // your sequelize instance

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false // optional
});

// Sync the table (creates if not exists)
await User.sync();

export default User;
