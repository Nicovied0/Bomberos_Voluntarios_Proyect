const express = require("express");
const router = express.Router();
const Users = require("../models/User");

// Obtener todos los USUARIOS
router.get("/", async (req, res) => {
  try {
    const todos = await Users.find();
    console.log("Se llamó a la ruta /USERS");
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener los vehículos", error);
    res.status(500).json({ error: "Error al obtener los vehículos" });
  }
});

module.exports = router;
