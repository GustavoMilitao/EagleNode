'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
    ID: {
        type: String,
        default: ""
    },
    IDCustomer: { type: String, default: "" },
    IDDistributor: { type: String, default: "" },
    IDDriver: { type: String, default: "" },
    TotalPrice: Number,
    ProductsList: { type: Array, default: [] },
    Freight: {
        TotalFreightCostPerKm: Number,
        TotalFreight: Number,
    },
    Payments: { type: Array, default: [] }
});

module.exports = mongoose.model('Orders', Order);