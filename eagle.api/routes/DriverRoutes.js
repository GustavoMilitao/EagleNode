'use strict';
module.exports = function(app) {
  var controller = require('../controllers/DriverController');
  
  app.route('/drivers')
    .post(controller.create_a_driver)
    .get(controller.list_all_drivers);

  app.route('/drivers/:driverId')
  .put(controller.update_a_driver)
    .delete(controller.delete_a_driver)
    .get(controller.read_a_driver);
};
