const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('goods_list_new', {
		id: {
      type: DataTypes.STRING(10),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
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
	})
}

