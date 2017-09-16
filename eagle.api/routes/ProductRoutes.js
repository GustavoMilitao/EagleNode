'use strict';
module.exports = function(app) {
  var controller = require('../controllers/ProductController');
  
  app.route('/products')
    .post(controller.create_a_product)
    .get(controller.list_all_products);

  app.route('/products/:productId')
    .put(controller.update_a_product)
    .delete(controller.delete_a_product)
    .get(controller.read_a_product);
};
