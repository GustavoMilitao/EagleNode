'use strict';
module.exports = function(app) {
  var controller = require('../controllers/OrderController');
  
  app.route('/orders')
    .post(controller.create_a_order)
    .get(controller.list_all_orders);

  app.route('/orders/:orderId')
    .put(controller.update_a_order)
    .delete(controller.delete_a_order)
    .get(controller.read_a_order);
};
