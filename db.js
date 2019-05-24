var config =  require('./config');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://root:" + config.db_pass + "@axileo-d31gv.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
