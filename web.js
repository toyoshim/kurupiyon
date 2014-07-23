var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/static'));

var port = Number(process.env.PORT);
app.listen(port, function() {
    console.log("Listening on " + port);
});