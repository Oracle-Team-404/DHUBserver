"use strict";

const RouteService = require('./route.service.js');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

class RouteController {

  uploadFile(req, res) {
    var form       = new formidable.IncomingForm();
     form.multiples = false;
     form.uploadDir = './tmp';

     form.on('file', function (field, file)
     {
        // fs.rename(file.path, path.join(form.uploadDir, 'temp.csv'));
     });

     form.on('error', function (err)
     {
         console.log('An error has occured: \n' + err);
     });

     form.on('end', function ()
     {
         const csvFilePath = path.join(form.uploadDir, 'temp.csv');

        /* UploadService.uploadFile(req.params.type, csvFilePath, req)
             .then(function(results){
                 res.send(results)
             })
             .catch(function(){
                 res.status(404).send('Error')
             });*/

             RouteService.uploadFile(csvFilePath)
               .then(function(result) {
                 res.send('success');
               });
     });

     form.parse(req);


  }

  getChartData(req, res) {
    console.log('MADE IT HERE');
    RouteService.getChartData()
      .then(function(result) {
        res.send(result);
      });
  }
}

module.exports = new RouteController();
