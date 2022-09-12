const { DataTypes, Model } = require('sequelize')
const sequelize = require('../sequlizeConnection')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name_of_user: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  tel_number_of_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  email_of_user: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  },
  password_of_user: {
    type: DataTypes.STRING(225),
    allowNull: false,
  }
},
  {
    sequelize,
    tableName: 'Users'
  })

  
module.exports = User
