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
  data = req.body;
  if (!data.name)
    return res.status(422).send("Incorrect Request: 'name' is missing in request body");
  client.connect(err => {
    var collection = client.db("GoVirtuo").collection("stations");
    collection.find().toArray(function(err, result) {
      if (err)
      {
        client.close();
        return res.status(500).send("Error while trying to access 'stations' collection");
      }
      var count = result.length;
      collection.insertOne({
        _id: count + 1,
        name: data.name
      }, function(err2, result2) {
        if (err2)
        {
          client.close();
          return res.status(500).send("Error while trying to add document to 'stations' collection");
        }
        res.status(200).send(result2.ops[0]);
      });
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
.put(function(req, res) {
  return res.status(404).send("Route Not configured yet");
})
.delete(function(req, res) {
  return res.status(404).send("Route Not configured yet");
});

module.exports = router;
