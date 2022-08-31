const express = require('express')
const sequelize = require('./GoodsListBack/requestToDB/sequlizeConnection')
const cors = require('cors')
const goodList = require('./GoodsListBack/requestToBack/routers/goodsListRouters')

// const lang = require('lodash/fp/lang')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/goods', goodList)

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
	await assertDatabaseConnectionOk();

	console.log(`Starting Sequelize + Express example on port ${port}...`);

	app.listen(port, () => {
		console.log(`Express server started on port ${port}. Try some routes, such as '/api/users'.`);
	});
}

init();


