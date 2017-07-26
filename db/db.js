let mysql = require('mysql')
let config = require('./config.js');

let connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});
