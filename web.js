var express = require("express");
var logfmt = require("logfmt");
var momolog = require("momolog");

var app = express();

var url = process.env.MONGOLAB_URI;
if (url) {
  var log = momolog();
  var collection = process.env.DEBUG ? 'log-debug' : 'log';
  console.log('col: ' + collection);
  log.connect(url, collection).then(function() {
    app.use(log.morgan());
    main();
  });
} else {
  main();
}


function main() {
  app.use(logfmt.requestLogger());
  app.use(express.static(__dirname + '/static'));

  var port = Number(process.env.PORT);
  app.listen(port, function() {
      console.log("Listening on " + port);
  });
}