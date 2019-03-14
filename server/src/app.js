console.log("hello")

const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./main')
const config = require('./configurations/config.js')

const app = express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())


sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port)
    console.log("server started on port ${config.port}")
  })
