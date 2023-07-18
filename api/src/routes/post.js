const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Importa el modelo de la publicación

// Ruta para guardar una nueva publicación
router.post('/post', async (req, res) => {
  try {
    const { iframeLink } = req.body; // Obtiene el enlace del iframe desde el cuerpo de la solicitud
    const nuevaPublicacion = new Post({ iframeLink });
    await nuevaPublicacion.save();
    res.json({ mensaje: 'Publicación guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la publicación:', error);
    res.status(500).json({ error: 'Error al guardar la publicación' });
  }
});

module.exports = router;