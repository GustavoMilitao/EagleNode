'use strict';


var mongoose = require('mongoose'),
  BankingAccount = mongoose.model('BankingAccounts');



exports.create_a_banking_account = function(req, res) {
  var new_banking_account = new BankingAccount(req.body);
  new_banking_account.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, bankingAccount : response });
  });
};

exports.update_a_banking_account = function(req, res) {
  BankingAccount.findOneAndUpdate(
      {_id: req.params.bankingAccountId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, bankingAccount : response });
  });
};


exports.delete_a_banking_account = function(req, res) {
  BankingAccount.remove({
    _id: req.params.bankingAccountId
  }, function(err, bankingAccount) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_banking_account = function(req, res) {
  BankingAccount.findById(req.params.bankingAccountId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, bankingAccount : response});
  });
};

exports.list_all_banking_accounts = function(req, res) {
    var query = {};
    BankingAccount.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, bankingAccounts: response });
    }); 
};