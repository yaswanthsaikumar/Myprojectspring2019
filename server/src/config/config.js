const path = require("path")
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'fitnesstracker',
    user: process.env.DB_USER || 'fitnesstracker',
    password: process.env.DB_PASS || 'fitnesstracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage:  '../fitnesstracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
