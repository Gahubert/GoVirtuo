var config =  require('./config');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://root:" + config.db_pass + "@axileo-d31gv.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

/*client.connect(err => {
  const collection = client.db("GoVirtuo").collection("stations");
  var cursor = collection.find();
  cursor.each(function (err, doc) {
    console.log(doc);
  });
});*/

module.exports = client;
