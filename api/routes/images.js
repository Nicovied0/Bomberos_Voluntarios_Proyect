const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

// Ruta GET para obtener todas las imágenes
router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener las imágenes" });
  }
});

module.exports = router;
