var express = require('express');
var config = require('../config');
var bodyParser = require('body-parser');
var functions = require('../functions');
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
      var free_id = functions.get_free_id(result);
      collection.insertOne({
        _id: free_id,
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
  //Running out of time
  
  /*client.connect(err => {
    client.db("GoVirtuo").collection("stations").find().toArray(function(err, result) {
      if (err)
      {
        client.close();
        return res.status(500).send("Error while trying to access 'stations' collection");
      }
      res.status(200).send(result);
    });
  });*/
  return res.status(404).send("Route Not configured yet");
})
.put(function(req, res) {
  return res.status(404).send("Route Not configured yet");
})
.delete(function(req, res) {
  return res.status(404).send("Route Not configured yet");
});

module.exports = router;
