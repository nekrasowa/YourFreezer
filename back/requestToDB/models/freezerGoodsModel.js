const { DataTypes, Model } = require('sequelize')
const sequelize = require('../sequlizeConnection')

class FreezerGoods extends Model {}

FreezerGoods.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name_of_good: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  number_of_good: {
    type: DataTypes.REAL,
    allowNull: true
  },
  unit_of_good: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  type_of_good: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  date_of_addition: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  sequelize,
  tableName: 'FreezerGoods'
})
// FreezerGoods.sync({ alter: true })
module.exports = FreezerGoods

