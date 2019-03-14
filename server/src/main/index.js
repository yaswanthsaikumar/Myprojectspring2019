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
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE fitness_users (info TEXT)");

  var stmt = db.prepare("INSERT INTO fitness_users VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("SELECT * FROM fitness_users WHERE Id=? " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM fitness-users", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
    )
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
