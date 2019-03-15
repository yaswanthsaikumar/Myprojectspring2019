const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'muppally1',
    password: 'coeweh',
    database: 'muppally1_db',
    connectionLimit: 10,
    insecureAuth: false
});
module.exports = conn;