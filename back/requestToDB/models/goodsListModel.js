const { DataTypes, Model } = require('sequelize')
const sequelize = require('../sequlizeConnection')

class GoodsList extends Model {}

GoodsList.init({
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
  is_Checked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  {
    sequelize,
    tableName: 'Goods_list'
  })

  
module.exports = GoodsList
