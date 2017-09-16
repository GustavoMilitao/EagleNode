'use strict';
module.exports = function(app) {
  var controller = require('../controllers/CarController');
  
  app.route('/cars')
    .post(controller.create_a_car)
    .get(controller.list_all_cars);

  app.route('/cars/:carId')
    .put(controller.update_a_car)
    .delete(controller.delete_a_car)
    .get(controller.read_a_car);
};
