const express = require("express");
const router = express.Router();

const vehiclesRoutes = require("./vehicles");
const authRoutes = require("./auth");
const uploadData = require("./uploadData");


router.use("/vehicles", vehiclesRoutes);
router.use("/auth", authRoutes);
router.use("/upload", uploadData);


module.exports = router;
