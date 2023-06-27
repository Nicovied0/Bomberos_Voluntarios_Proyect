const express = require("express");
const router = express.Router();
const Vehicles = require("../models/Vehicles");

// Obtener todos los vehículos
router.get("/", async (req, res) => {
  try {
    const todos = await Vehicles.find();
    console.log("Se llamó a la ruta /vehicles");
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener los vehículos", error);
    res.status(500).json({ error: "Error al obtener los vehículos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicles.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }
    console.log(`Se llamó a la ruta /vehicles/${req.params.id}`);
    res.json(vehicle);
  } catch (error) {
    console.error("Error al obtener el vehículo", error);
    res.status(500).json({ error: "Error al obtener el vehículo" });
  }
});

module.exports = router;
