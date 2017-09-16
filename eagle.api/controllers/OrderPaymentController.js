'use strict';


var mongoose = require('mongoose'),
  OrderPayment = mongoose.model('OrderPayments');



exports.create_a_order_payment = function(req, res) {
  var new_order_payment = new OrderPayment(req.body);
  new_order_payment.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, orderPayment : response });
  });
};

exports.update_a_order_payment = function(req, res) {
  OrderPayment.findOneAndUpdate(
      {_id: req.params.orderPaymentId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, orderPayment : response });
  });
};


exports.delete_a_order_payment = function(req, res) {
  OrderPayment.remove({
    _id: req.params.orderPaymentId
  }, function(err, orderPayment) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_order_payment = function(req, res) {
  OrderPayment.findById(req.params.orderPaymentId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, orderPayment : response});
  });
};

exports.list_all_order_payments = function(req, res) {
    var query = {};
    OrderPayment.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, orderPayments: response });
    }); 
};