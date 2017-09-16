'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BankingAccount = new Schema( {
    ID: { type: String, default: "" },
    IDUser: { type: String, default: "" },
    Bankcode: { type: String, default: "" },
    Bankname: { type: String, default: "" },
    Agency: { type: String, default: "" },
    CurrentAccount: { type: String, default: "" },
    Digit: { type: String, default: "" },
    RegDate: Date,
    User: { type: String, default: "" }
  });

  module.exports = mongoose.model('BankingAccount', Team);