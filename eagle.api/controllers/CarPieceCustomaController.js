'use strict';


var mongoose = require('mongoose'),
  CarPieceCustoma = mongoose.model('CarPieceCustomas');



exports.create_a_car_piece_customa = function(req, res) {
  var new_car_piece_customa = new CarPieceCustoma(req.body);
  new_car_piece_customa.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, carPieceCustoma : response });
  });
};

exports.update_a_car_piece_customa = function(req, res) {
  CarPieceCustoma.findOneAndUpdate(
      {_id: req.params.carPieceCustomaId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, carPieceCustoma : response });
  });
};


exports.delete_a_car_piece_customa = function(req, res) {
  CarPieceCustoma.remove({
    _id: req.params.carPieceCustomaId
  }, function(err, carPieceCustoma) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};

exports.read_a_car_piece_customa = function(req, res) {
  CarPieceCustoma.findById(req.params.carPieceCustomaId, 
    function(err, response) {
    if (err)
      res.send(err);
    res.send({ success: true, carPieceCustoma : response});
  });
};

exports.list_all_car_piece_customas = function(req, res) {
    var query = {};
    CarPieceCustoma.find(query, function (err, response) {
      if (err)
        res.send(err);
      res.send({ success: true, carPieceCustomas: response });
    }); 
};