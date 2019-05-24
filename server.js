var app = require('./app');
var config = require('./config');

var server = app.listen(config.port, config.hostname, function() {
  console.log("Up on http://" + config.hostname + ":" + config.port + "\n");
  console.log("Proudly devlopped by Gabriel Hubert for Go Virtuo.");
});
