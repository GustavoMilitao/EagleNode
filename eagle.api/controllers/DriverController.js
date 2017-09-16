'use strict';


var mongoose = require('mongoose'),
  Driver = mongoose.model('Drivers');



exports.create_a_driver = function(req, res) {
  var new_driver = new Driver(req.body);
  new_driver.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, driver : response });
  });
};

exports.update_a_driver = function(req, res) {
  Driver.findOneAndUpdate(
      {_id: req.params.driverId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, driver : response });
  });
};


exports.delete_a_driver = function(req, res) {
  Driver.remove({
    _id: req.params.driverId
  }, function(err, driver) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_driver = function(req, res) {
  Driver.findById(req.params.driverId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, driver : response});
  });
};

exports.list_all_drivers = function(req, res) {
    var query = {};
    Driver.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, drivers: response });
    }); 
};