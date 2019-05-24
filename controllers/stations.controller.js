var express = require('express');
var config = require('../config');
var bodyParser = require('body-parser');
var client = require('../db');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route('/')
.get(function(req, res) {
  client.connect(err => {
    client.db("GoVirtuo").collection("stations").find().toArray(function(err, result) {
      if (err)
      {
        client.close();
        return res.status(500).send("Error while trying to access 'stations' collection");
      }
      res.status(200).send(result);
    });
  });
  client.close();
})
.post(function(req, res) {
  client.connect(err => {
    client.db("GoVirtuo").collection("stations").insertOne({

    }, function(err, res) {
      if (err)
      {
        client.close();
        return res.status(500).send("Error while trying to add document to 'stations' collection");
      }
      res.status(200).send(res);
    });
  });
  client.close();
});

router.route('/:id')
.get(function(req, res) {
  client.connect(err => {
    client.db("GoVirtuo").collection("stations").find().toArray(function(err, result) {
      if (err)
      {
        client.close();
        return res.status(500).send("Error while trying to access 'stations' collection");
      }
      res.status(200).send(result);
    });
  });
})
.post(function(req, res) {
  return res.status(404).send("Route Not configured yet");
})
.put(function(req, res) {
  return res.status(404).send("Route Not configured yet");
})
.delete(function(req, res) {
  return res.status(404).send("Route Not configured yet");
});

module.exports = router;
