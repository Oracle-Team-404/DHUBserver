'use strict';

const pool = require('../db/db.js').pool;
const csv = require('csvtojson');
//const fs = require('fs');

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
      return Promise.resolve('test');
    }
}

module.exports = new RouteService();
