'use strict';
module.exports = function(app) {
  var controller = require('../controllers/CreditCardController');
  
  app.route('/creditCards')
    .post(controller.create_a_credit_card)
    .get(controller.list_all_credit_cards);

  app.route('/creditCards/:creditCardId')
    .put(controller.update_a_credit_card)
    .delete(controller.delete_a_credit_card)
    .get(controller.read_a_credit_card);
};
