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

// Ruta para el inicio de sesión
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Verificar si el email existe
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ message: "Email o contraseña incorrectos" });
      }

      // Verificar la contraseña
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Email o contraseña incorrectos" });
      }

      // Generar el token de acceso JWT
      const token = jwt.sign({ userId: user._id }, "secreto", {
        expiresIn: "1h",
      });

      res.status(200).json({ token: token });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error en el servidor" });
    });
});


module.exports = router;
