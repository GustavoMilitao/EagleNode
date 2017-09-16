'use strict';


var mongoose = require('mongoose'),
  CreditCard = mongoose.model('CreditCards');



exports.create_a_credit_card = function(req, res) {
  var new_credit_card = new CreditCard(req.body);
  new_credit_card.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, creditCard : response });
  });
};

exports.update_a_credit_card = function(req, res) {
  CreditCard.findOneAndUpdate(
      {_id: req.params.creditCardId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, creditCard : response });
  });
};


exports.delete_a_credit_card = function(req, res) {
  CreditCard.remove({
    _id: req.params.creditCardId
  }, function(err, creditCard) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_credit_card = function(req, res) {
  CreditCard.findById(req.params.creditCardId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, creditCard : response});
  });
};

exports.list_all_credit_cards = function(req, res) {
    var query = {};
    CreditCard.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, creditCards: response });
    }); 
};