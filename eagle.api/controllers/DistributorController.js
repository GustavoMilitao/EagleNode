'use strict';


var mongoose = require('mongoose'),
  Distributor = mongoose.model('Distributors');



exports.create_a_distributor = function(req, res) {
  var new_distributor = new Distributor(req.body);
  new_distributor.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, distributor : response });
  });
};

exports.update_a_distributor = function(req, res) {
  Distributor.findOneAndUpdate(
      {_id: req.params.distributorId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, distributor : response });
  });
};


exports.delete_a_distributor = function(req, res) {
  Distributor.remove({
    _id: req.params.distributorId
  }, function(err, distributor) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_distributor = function(req, res) {
  Distributor.findById(req.params.distributorId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, distributor : response});
  });
};

exports.list_all_distributors = function(req, res) {
    var query = {};
    Distributor.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, distributors: response });
    }); 
};