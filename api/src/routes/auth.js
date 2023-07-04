const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.get("/", async (req, res) => {
  res.json("Ruta login");
});

// Ruta para el registro de usuarios
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Verificar si el email ya está registrado
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ message: "El email ya está registrado" });
      }

      // Crear un nuevo usuario
      const newUser = new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      });

      newUser
        .save()
        .then((user) => {
          res.status(201).json({ message: "Registro exitoso" });
        })
        .catch((error) => {
          res.status(500).json({ message: "Error en el servidor" });
        });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error en el servidor" });
    });
});



module.exports = router;
