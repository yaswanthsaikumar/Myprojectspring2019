const express = require('express');
 var app = express(),
  bodyParser = require('body-parser');
  //const user = require('./user');
  port = 3000;


  var mysql = require("mysql");

  var pool = mysql.createPool({
          host     : 'localhost',
          user     : 'muppally1',
          password : 'coeweh',
          port     :  22,
          database : 'muppally1_db',
          connectionLimit : 100
      });

  exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
      if(!err) {
        console.log("error");
        return callback(err);
      }
      callback(err, conn);
    });
  };// connect to database
  const users = require('../connections/user');
app.listen(port);

console.log('API server started on: ' + port);

module.exports = pool;

