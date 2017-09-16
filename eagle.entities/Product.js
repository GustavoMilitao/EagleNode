'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema( {
    Description: { type: String, default: "" },
    Name: { type: String, default: "" },
    Returnable: { type: Boolean, default: false },
    SinglePrice: Number,
    Available: { type: String, default: "" },
  });

  module.exports = mongoose.model('Product', Product);