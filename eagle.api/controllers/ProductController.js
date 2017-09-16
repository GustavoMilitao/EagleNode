'use strict';


var mongoose = require('mongoose'),
  Product = mongoose.model('Products');



exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, product : response });
  });
};

exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate(
      {_id: req.params.productId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, product : response });
  });
};


exports.delete_a_product = function(req, res) {
  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_product = function(req, res) {
  Product.findById(req.params.productId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, product : response});
  });
};

exports.list_all_products = function(req, res) {
    var query = {};
    Product.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, products: response });
    }); 
};