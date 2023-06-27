const mongoose = require("mongoose");

const VehiclesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
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
  image: {
    type: String,
    required: true,
  },
  patent: {
    type: String,
    required: true,
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
  lastRecharge: {
    type: String,
    default: "No se Ingreso Dato",
  },
  lastMaintenance: {
    type: String,
    default: "No se Ingreso Dato",
  },
  lastServiceProgramed: {
    type: String,
    default: "No se Ingreso Dato",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vehicles = mongoose.model("Vehicle", VehiclesSchema);

module.exports = Vehicles;
