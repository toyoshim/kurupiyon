var express = require("express");
var logfmt = require("logfmt");
//var momolog = require("momolog");

var app = express();

//var url = process.env.MONGOLAB_URI;
var url = false;
if (url) {
  var collection = process.env.DEBUG ? 'log-debug' : 'log';
  console.log('col: ' + collection);
  momolog.connect(url, collection).then(function(logger) {
    app.use(logger);
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
