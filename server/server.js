var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
var apiRoutes = express.Router();

require('../routes/dbRoutes.js')(apiRoutes);

app.use(cors());
app.use('/api', apiRoutes);

var port = process.env.PORT || 3001;

// LISTENER
app.listen(port, '0.0.0.0',  function () {
  console.log('Server is listening on port ' + port)
});
