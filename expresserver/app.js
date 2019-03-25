const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const rootRouter = require('./routes');

const MongoStore = require('connect-mongo')(session);
const PORT = 3000;
//const DB_CONNECTION_STRING = 'mongodb://localhost/fitness';
const DB_CONNECTION_STRING = ' mongodb://localhost/fitness';

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true
});
const db = mongoose.connection;
//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));


const app = express();
app.use(bodyParser.json());
//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.get('/', function (req, res) {
    res.send('Hii.. this is fitness-tracker-api');
});

rootRouter(app);

app.listen(PORT, function () {
    console.log('server listening on port: ' + PORT);
});