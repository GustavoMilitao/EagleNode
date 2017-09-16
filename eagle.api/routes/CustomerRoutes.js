'use strict';
module.exports = function(app) {
  var controller = require('../controllers/CustomerController');
  
  app.route('/customers')
    .post(controller.create_a_customer)
    .get(controller.list_all_customers);

  app.route('/customers/:customerId')
    .put(controller.update_a_customer)
    .delete(controller.delete_a_customer)
    .get(controller.read_a_customer);
};
