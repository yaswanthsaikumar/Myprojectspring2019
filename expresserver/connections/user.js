const express = require('express');
const User = require('../connections/mysqlconfig');
var app = express();
app.get("/Fitnessusers/:id", (req, res) => {

    conn.query('select * from Fitnessuser where id=?',[req.params.id], (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});