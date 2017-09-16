'use strict';
module.exports = function(app) {
  var controller = require('../controllers/BankingAccountController');
  
  app.route('/bankingAccounts')
    .post(controller.create_a_banking_account)
    .get(controller.list_all_banking_accounts);

  app.route('/bankingAccounts/:bankingAccountId')
    .put(controller.update_a_banking_account)
    .delete(controller.delete_a_banking_account)
    .get(controller.read_a_banking_account);
};
