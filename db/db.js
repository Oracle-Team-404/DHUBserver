let mysql = require('mysql')
let config = require('./config.js');

let connection = mysql.createConnection(config);

config.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO hud_data (property_state, property_city, property_county, property_zip, original_mortgagee_sponser, originating_mortgage_number, sponsor_name, sponsor_number, down_payment_source, non_profit_number, product_type, loan_purpose, property_type, interest_rate, original_mortgage_amount, endorsement_year, endorsement_month) VALUES ?;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success!");
  });
});
