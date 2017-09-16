'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CreditCard = new Schema( {
    NameInCard: { type: String, default: "" },
    CardNumber: { type: String, default: "" },
    ValidTru: Date,
    CVV: { type: String, default: "" },
    Active: { type: String, default: "" },
  });

  module.exports = mongoose.model('CreditCard', CreditCard);