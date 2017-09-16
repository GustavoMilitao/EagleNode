'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Driver = new Schema( {
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
  RegDate: Date,
  DriverGain: {
    ID: { type: String, default: "" },
    NetGainPerKm: Number,
    RegDate: Date,
    Car: { type: String, default: "" }

  },
  Cars: { type: Array, default: [] },
  // Criar uma coleção para estes arrays e fazer referência do ID aqui.
  BankingAccounts: { type: Array, default: [] }
});

module.exports = mongoose.model('Driver', Driver);