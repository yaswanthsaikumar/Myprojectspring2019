const fs = require ('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../configurations/config.js')

var db={}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
