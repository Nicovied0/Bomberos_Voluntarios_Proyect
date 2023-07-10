const express = require("express");
const router = express.Router();

const vehiclesRoutes = require("./vehicles");
const authRoutes = require("./auth");
const uploadData = require("./uploadData");
const uploadImage = require("./uploadFile");

router.use("/vehicles", vehiclesRoutes);
router.use("/auth", authRoutes);
router.use("/upload", uploadData);
router.use("/uploadImage", uploadImage);

module.exports = router;
