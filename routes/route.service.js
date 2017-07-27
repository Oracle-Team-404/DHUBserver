'use strict';

var pool = require('../db/db.js').pool;

class RouteService {

    constructor() {

    }

    uploadFile() {
         return Promise.resolve();
    }

    getChartData() {
      return Promise.resolve('test');
    }
}

module.exports = new RouteService();
