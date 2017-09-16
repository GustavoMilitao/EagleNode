'use strict';
module.exports = function(app) {
  var controller = require('../controllers/OrderPaymentController');
  
  app.route('/orderPayments')
    .post(controller.create_a_order_payment)
    .get(controller.list_all_order_payments);

  app.route('/orderPayments/:orderPaymentId')
    .put(controller.update_a_order_payment)
    .delete(controller.delete_a_order_payment)
    .get(controller.read_a_order_payment);
};
