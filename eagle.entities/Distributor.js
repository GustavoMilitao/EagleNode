'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Distributor = new Schema({
  Name: { type: String, default: "" },
  Address: { type: String, default: "" },
  State: { type: String, default: "" },
  City: { type: String, default: "" },
  Addresscode: { type: String, default: "" },
  Country: { type: String, default: "" },
  DDI: { type: String, default: "" },
  DDD: { type: String, default: "" },
  Phonenumber: { type: String, default: "" },
  Nickname: { type: String, default: "" },
  Password: { type: String, default: "" },
  Email: { type: String, default: "" },
  RegDate: { type : Date, default: null },
  BankingAccounts: { type: Array, default: [] }
});

module.exports = mongoose.model('Distributors', Distributor);