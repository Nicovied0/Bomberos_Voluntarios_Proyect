const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const uploadMiddleware = require("../middleware/uploadMiddleware");

cloudinary.config({
  cloud_name: "dnenoxgh8",
  api_key: "517676561973372",
  api_secret: "w96mHOp6pxaoU7EDBV6oc1kbt80",
});

function uploadImageToCloudinary(imageFile) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imageFile.path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.secure_url);
      }
    });
  });
}

router.get("/", async (req, res) => {
  try {
    res.json({
      mensaje: "funciona al get",
    });
  } catch (error) {
    console.error("Error al get", error);
    res.status(500).json({ error: "Error al get" });
  }
});

// Utiliza el middleware de carga de archivos antes de la ruta POST
router.post("/", uploadMiddleware, async (req, res) => {
  try {
    const imageUrl = await uploadImageToCloudinary(req.file);
    console.log(imageUrl);
    res.json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ error: "Error al cargar la imagen" });
  }
});

module.exports = router;