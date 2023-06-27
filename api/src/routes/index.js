const express = require("express");
const router = express.Router();
const Vehicles = require("../models/Vehicles");

// Obtener todos los todos
router.get("/vehicles", async (req, res) => {
  try {
    const todos = await Vehicles.find();
    res.json(todos);
    console.log("se llamo",todos );
  } catch (error) {
    console.error("Error al obtener los todos", error);
    res.status(500).json({ error: "Error al obtener los todos" });
  }
});




module.exports = router;

