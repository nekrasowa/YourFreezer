const express = require('express')
const sequelize = require('./requestToDB/sequlizeConnection')
const cors = require('cors')
const goodList = require('./GoodsListBack/requestToBack/routers/goodsListRouters')
const createNewUser = require('./EnterToSystemBack/requestToBack/controlers/postCreateNewUser')
const enterToSystem = require('./EnterToSystemBack/requestToBack/routers/enterToSystemRouters')
const freezerGoods = require('./FreezerGoodsBack/routers/freezerGoodsRouters')
const User = require('./requestToDB/models/userModel')
const GoodsList = require('./requestToDB/models/goodsListModel')
const { checkJWTAddId } = require('./helpFunc/checkJWTAddId')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/goods', checkJWTAddId)
app.use('/freezer', checkJWTAddId)

app.use('/register', createNewUser)
app.use('/goods', goodList)
app.use('/users', enterToSystem)
app.use('/freezer', freezerGoods)

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk()
	console.log(`Starting Sequelize + Express example on port ${port}...`)
	app.listen(port, () => {
		console.log(`Express server started on port ${port}.`)
	})
	User.hasMany(GoodsList, {
		foreignKey: 'user_id'
	})
	sequelize.sync({ alter: true })
}

init();


