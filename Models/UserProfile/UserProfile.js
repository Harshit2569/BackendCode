import { DataTypes, Model } from 'sequelize';
import sequelize from '../index.js';
import User from './User.js'; // for foreign key association

class UserProfile extends Model {}

UserProfile.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: { model: User, key: 'id' } 
  },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING }
}, {
  sequelize,
  modelName: 'UserProfile',
  tableName: 'user_profile',
  timestamps: false
});

// Optional: associate models
User.hasOne(UserProfile, { foreignKey: 'user_id' });
UserProfile.belongsTo(User, { foreignKey: 'user_id' });

// Sync the table
await UserProfile.sync();

export default UserProfile;
