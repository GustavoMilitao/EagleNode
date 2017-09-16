'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderPayment = new Schema({
    IDPayMethod: { type: String, default: "" },
    IDOrder: { type: String, default: "" },
    PaymentType: { type: String, default: "" },
    Value: Number,
});

module.exports = mongoose.model('OrderPayments', OrderPayment);