var routeController = require('./route.controller.js');

module.exports = function(apiRoutes) {
  apiRoutes.post('/upload', routeController.uploadFile),
  apiRoutes.get('/chart', routeController.getChartData)
}
