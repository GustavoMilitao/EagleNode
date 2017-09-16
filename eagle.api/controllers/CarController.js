'use strict';


var mongoose = require('mongoose'),
  Car = mongoose.model('Cars');



exports.create_a_car = function(req, res) {
  var new_car = new Car(req.body);
  new_car.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, car : response });
  });
};

exports.update_a_car = function(req, res) {
  Car.findOneAndUpdate(
      {_id: req.params.carId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, car : response });
  });
};


exports.delete_a_car = function(req, res) {
  Car.remove({
    _id: req.params.carId
  }, function(err, car) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_car = function(req, res) {
  Car.findById(req.params.carId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, car : response});
  });
};

exports.list_all_cars = function(req, res) {
    var query = {};
    Car.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, cars: response });
    }); 
};