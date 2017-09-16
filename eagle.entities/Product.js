'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    Description: {
        type: String, default: ""
    },
    Name: {
        type: String,
        default: ""
    },
    Returnable: {
        type: Boolean,
        default: false
    },
    SinglePrice: {
        type: Number,
        default: 0.0
    },
    Available: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model('Products', Product);