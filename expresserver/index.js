const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const User = require('./models/User');
const Contact = require('./models/contact');
const loginuser = require('./models/loginuser')
app.use(bodyparser.json());


const port = 8000;
app.listen(port, () => {
console.log("App is listening to port: "+port);
})
//table for users
app.get("/Fitnessuser", (req, res) => {

    User.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/Fitnessuser/:id", (req, res) => {

    User.get(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/Fitnessuser/add", (req, res) => {

    console.log(req.body);
    User.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//table for contacts
app.get("/contact", (req, res) => {

    Contact.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/contact/:phone", (req, res) => {   //unique to each table

    Contact.get(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/contactadd", (req, res) => {   //unique to each table

    console.log(req.body);
    Contact.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

//table for loginusers
app.get("/loginuser", (req, res) => {

    loginuser.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/loginuser/:id", (req, res) => {

    loginuser.get(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
app.post("/loginuser/add", (req, res) => {

    console.log(req.body);
    loginuser.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

module.exports = mysql;
module.exports = app;
