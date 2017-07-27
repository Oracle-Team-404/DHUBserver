"use strict";

const RouteService = require('./route.service.js');

class RouteController {

  uploadFile(req, res) {
    console.log('MADE IT HERE');
    RouteService.uploadFile()
      .then(function(result) {
        res.send('success');
      });
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
