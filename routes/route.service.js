'use strict';

const pool = require('../db/db.js').pool;
const csv = require('csvtojson');
//const fs = require('fs');

  var sql = 'INSERT INTO `hud_data` (`property state`, `property city`, `property county`,' +
    '`property zip`, `original mortgagee sponser`, `originating mortgage number`,' +
    '`sponsor name`, `sponsor number`, `down payment source`, `non profit number`, `product type`,' +
    '`loan purpose`, `property type`, `interest rate`, `original mortgage amount`, `endorsement year`, `endorsement month`) VALUES (?);`';

    var sql2 = 'INSERT INTO hud_data_v2 (property_state, property_city, property_county,' +
      'property_zip, origination_mortgagee_sponsor_originator, originating_mortgagee_number,' +
      'sponsor_name, sponsor_number, down_payment_source, non_profit_number, product_type,' +
      'loan_purpose, property_type, interest_rate, original_mortgage_amount, endorsement_year, endorsement_month) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
class RouteService {

    constructor() {

    }

    uploadFile(filePath) {
      return new Promise(
        function (resolve, reject) {
        csv()
        .fromFile(filePath)
        .on('json', function (jsonObj)
        {
        //TODO: Write DB QUERY HERE
         console.log('NEW JSON OBJECT')
         console.log(jsonObj);
         console.log(jsonObj['Property State']);
        // pool.query(sql, [jsonObj], (err, result) => {
        pool.query(sql2, [
          jsonObj['Property State'],
          jsonObj['Property City'],
          jsonObj['Property County'],
          jsonObj['Property Zip'],
          jsonObj['Origination Mortgagee\/Sponsor Originator'],
          jsonObj['Originating Mortgagee Number'],
          jsonObj['Sponsor Name'],
          jsonObj['Sponsor Number'],
          jsonObj['Down Payment Source'],
          jsonObj['Non Profit Number'],
          jsonObj['Product Type'],
          jsonObj['Loan Purpose'],
          jsonObj['Property Type'],
          jsonObj['Interest Rate'],
          jsonObj['Original Mortgage Amount'],
          jsonObj['Endorsement  Year'],
          jsonObj['Endorsement Month']
         ], (err, result) => {
           if(err) {
             console.log('ERROR');
             console.log(err);
           }
           console.log(result);
         })
        })
        .on('error', function(err) {
            console.log(err);
            console.log('ERROR occured moving on');
        })
        .on('done', function ()
        {
          /*fs.unlink(filePath, (err) => {
            if (err) {
                console.log("failed to delete csv file");
            } else {
                console.log('successfully deleted csv file');
            }
          });*/
            resolve();
        })
      })
    }

    getChartData() {
      let response = {};

      return new Promise(
      (resolve, reject) => {
        var sql = 'SELECT * FROM hud_data_v2' ;
        var sql2 = 'SELECT property_state, avg(interest_rate) as interest_rate from hud_data_v2 group by property_state';
        //var sql3 = 'SELECT top 10 origination_mortgagee_sponsor_originator, avg(interest_rate) as interest_rate from hud_data_v2 group by origination_mortgagee_sponsor_originator order by avg(interest_rate) desc';
        pool.query(sql, (err, result) => {
          response.data = result;
          pool.query(sql2, (err, result2) => {
            response.top = result2;
            resolve(response);
            //pool.query(sql3, (err, result3) => {
            //  response.bottom = result3;
            //  resolve(response);
            //})
          })
        });

      });


      //return Promise.resolve(response);
    }
}

module.exports = new RouteService();
