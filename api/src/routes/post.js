const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); // Importa el modelo de la publicación

router.get("/", async (req, res) => {
  try {
    const todos = await Post.find();
    console.log("Se llamó a la ruta /post");
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener los post", error);
    res.status(500).json({ error: "Error al obtener los post" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { iframeLink500 } = req.body; // Obtiene el enlace del iframe desde el cuerpo de la solicitud
    const nuevaPublicacion = new Post({ iframeLink500 });
    await nuevaPublicacion.save();
    res.json({ mensaje: "Publicación guardada exitosamente" });
  } catch (error) {
    console.error("Error al guardar la publicación:", error);
    res.status(500).json({ error: "Error al guardar la publicación" });
  }
});

module.exports = router;
