const express = require("express");
const router = express.Router();
const vehiclesRoutes = require("./vehicles");
const uploadData = require("./uploadData");




router.use("/vehicles", vehiclesRoutes);
router.use("/upload", uploadData);



module.exports = router;

