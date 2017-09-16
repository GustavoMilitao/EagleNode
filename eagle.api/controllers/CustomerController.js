'use strict';


var mongoose = require('mongoose'),
  Customer = mongoose.model('Customers');



exports.create_a_customer = function(req, res) {
  var new_customer = new Customer(req.body);
  new_customer.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, customer : response });
  });
};

exports.update_a_customer = function(req, res) {
  Customer.findOneAndUpdate(
      {_id: req.params.customerId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, customer : response });
  });
};


exports.delete_a_customer = function(req, res) {
  Customer.remove({
    _id: req.params.customerId
  }, function(err, customer) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_customer = function(req, res) {
  Customer.findById(req.params.customerId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, customer : response});
  });
};

exports.list_all_customers = function(req, res) {
    var query = {};
    Customer.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, customers: response });
    }); 
};