var express = require('express');
var bodyParser = require('body-parser');
var client = require('./db');
var stationsController = require('./controllers/stations.controller');
var carsController = require('./controllers/cars.controller')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/stations', stationsController);
app.use('/cars', carsController);

module.exports = app;
