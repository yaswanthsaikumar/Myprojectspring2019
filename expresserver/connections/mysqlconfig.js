const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  const user = require('./user');
  port = 3000;


const mysql = require('mysql');
// connection configurations
const conn= mysql.createPool({
    host: 'localhost',
    port: 22,
    user: 'muppally1',
    password: 'coeweh',
    databse: 'muppally1_db',
    connectionLimit: 10
});

// connect to database
module.exports = conn;
app.listen(port);

console.log('API server started on: ' + port);
