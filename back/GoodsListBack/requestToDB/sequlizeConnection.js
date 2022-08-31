const { Sequelize, Model } = require('sequelize')
// const { goods_list_new } = require('../requestToDB/models/goodsListModel')

const user = 'ludochka'
const host = 'localhost'
const database = 'freezer'
const password = '12345678'
const port = '5442'

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

// const modelDefiners = [
// 	require('./models/goodsListModel'),
// ]

// for (const modelDefiner of modelDefiners) {
// 	modelDefiner(sequelize)
// }


// console.log('[sequelize111]: ', sequelize)


module.exports = sequelize
