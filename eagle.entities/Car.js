'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Car = new Schema( {
    CarModel: {
      ID: { type: String, default: "" },
      ModelName: { type: String, default: "" },
      Brand: { type: String, default: "" },
      Year: { type: String, default: "" },
      Potency: { type: String, default: "" },
      Flex: { type: Boolean, default: false }
    },
    Customa: {
      ID: { type: String, default: "" },
      CarPiecesCustoma: { type: Array, default: [] },
      TotalCustomaValuePerKm: Number
    },
    ConsumptionCost: {
      ID: { type: String, default: "" },
      GasKmPerLiter: Number,
      GasPrice: Number,
      GasPricePerKm: Number,
      RegDate: Date,
    }
  });

  module.exports = mongoose.model('Car', Car);