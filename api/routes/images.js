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

// Ruta GET por ID para obtener una imagen específica
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ error: "Imagen no encontrada" });
    }
    res.json(image);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener la imagen" });
  }
});




module.exports = router;
