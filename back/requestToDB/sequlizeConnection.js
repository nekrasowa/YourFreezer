const { Sequelize } = require('sequelize')

const user = 'ludochka'
const host = 'postgres'
const database = 'freezer'
const password = '12345678'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

module.exports = sequelize
