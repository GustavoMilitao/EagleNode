'use strict';


var mongoose = require('mongoose'),
  Order = mongoose.model('Orders');



exports.create_a_order = function(req, res) {
  var new_order = new Order(req.body);
  new_order.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, order : response });
  });
};

exports.update_a_order = function(req, res) {
  Order.findOneAndUpdate(
      {_id: req.params.orderId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, order : response });
  });
};


exports.delete_a_order = function(req, res) {
  Order.remove({
    _id: req.params.orderId
  }, function(err, order) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_order = function(req, res) {
  Order.findById(req.params.orderId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, order : response});
  });
};

exports.list_all_orders = function(req, res) {
    var query = {};
    Order.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, orders: response });
    }); 
};