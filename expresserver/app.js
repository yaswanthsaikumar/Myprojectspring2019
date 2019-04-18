const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const rootRouter = require('./routes');

const PORT = 3000;
const DB_CONNECTION_STRING = 'mongodb://localhost/fitness';

mongoose.connect(DB_CONNECTION_STRING);
const db = mongoose.connection;
// handle mongo error
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));


const app = express();

app.use(bodyParser.json());

// cors
const whitelist = ['http://localhost:8080'];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

// use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db,
  }),
  cookie: {
    // one hour
    maxAge: new Date(Date.now() + (60 * 1000 * 60)),
    path: '/',
  },
}));

app.get('/', (req, res) => {
  res.send('Hii.. this is fitness-tracker-api');
});

rootRouter(app);

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
