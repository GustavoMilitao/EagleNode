'use strict';
module.exports = function(app) {
  var controller = require('../controllers/DistributorController');
  
  app.route('/distributors')
    .post(controller.create_a_distributor)
    .get(controller.list_all_distributors);

  app.route('/distributors/:distributorId')
    .put(controller.update_a_distributor)
    .delete(controller.delete_a_distributor)
    .get(controller.read_a_distributor);
};
