const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db'); // your Sequelize instance
const User = require('./user');         // your User model
const Product = require('./product');   // your Product model

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  tableName: 'cart',
  timestamps: true, // adds createdAt and updatedAt
});

// Associations
User.hasMany(Cart, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

Product.hasMany(Cart, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = Cart;
