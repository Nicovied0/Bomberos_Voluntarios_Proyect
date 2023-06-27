const { urlencoded } = require("express");
const mongoose = require("mongoose");

const VehiclesSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  imagen: {
    type:String,
    required: true
  },
  mileage: {
    type: Number,
    default: 0,
  },
  tankSize: {
    type: Number,
    default: 0,
  },
  amountOfFuel: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vehicles = mongoose.model("Vehicle", VehiclesSchema);

module.exports = Vehicles;
