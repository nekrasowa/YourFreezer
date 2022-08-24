const { DataTypes, Model } = require('sequelize')
const sequelize = require('../sequlizeConnection')

class Goods_list_new extends Model {}
console.log('[Goods_list_new]: ', Goods_list_new)

Goods_list_new.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name_of_good: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  unit_of_number: {
    type: DataTypes.REAL,
    allowNull: true
  },
  is_Checked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
},
  {
    sequelize
  })

  
module.exports = Goods_list_new
