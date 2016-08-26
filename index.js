const config = require('./config/config');

const express  = require('express');
const mongoose = require('mongoose');

const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const routes = require('./routes');

const port = config.server.port;
const app  = express();

require('./libraries/promisify-all')(['mongoose']);

mongoose.connect(config.mongo.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', routes);

app.listen(port, () => { console.log(`Magic happens on port ${port}`); });

module.exports = app;
