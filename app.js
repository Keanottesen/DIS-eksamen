const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// Require our routes into the application.
require('./routes/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'This route does not exist. Please make sure that your url is correct',
}));

module.exports = app;
