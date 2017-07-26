var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 1521;
// LISTENER
app.listen(port, function () {
  console.log('Server is listening on port 1521')
});
