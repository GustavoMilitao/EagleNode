'use strict';
module.exports = function(app) {
  var controller = require('../controllers/homeController');
  
  app.route('/home')
    .get(controller.home)
};
