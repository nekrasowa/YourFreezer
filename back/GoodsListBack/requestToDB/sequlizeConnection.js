const { Sequelize } = require('sequelize')

const user = 'ludochka'
const host = 'localhost'
const database = 'freezer'
const password = '12345678'
const port = '5442:5432'


const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

const modelDefiners = [
	require('./models/goodsListModel'),
]

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize)
}


module.exports = sequelize;