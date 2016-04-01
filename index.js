'use strict'
var express = require('express');

var app = express();
app.set('view engine', 'html');
app.use(express.static('.'));

var server = app.listen(3000, function () {
  var port = server.address().port;
	var host = server.address().address;
	console.log("Started on http://%s:%s", host, port);
});
