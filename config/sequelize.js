const Sequelize = require('sequelize')
const UserModel = require('../models/User')

const DB_HOST = 'localhost'
const DB_USERNAME = 'root'
const DB_PASSWORD = ''
const DB_NAME = 'node-crud'

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql', // mysql | sqlite | postgres | mssql,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// Readmore Sequelize Docs <http://docs.sequelizejs.com>

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false }).then(() => {
	console.log(`Database & tables created!`)
})

// Export Modules
module.exports = {
  User,
}