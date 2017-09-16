'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarPieceCustoma = new Schema({
    Name: { type: String, default: "" },
    KmToChange: Number,
    ValueToChange: Number,
});

module.exports = mongoose.model('CarPieceCustomas', CarPieceCustoma);