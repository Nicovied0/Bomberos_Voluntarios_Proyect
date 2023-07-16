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


router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id; // Obtiene el ID desde el parámetro de la URL
    const user = await Users.findById(userId); // Busca el usuario por su ID
    console.log("Se llamó a la ruta /USERS/" + userId);
    
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
});


module.exports = router;
