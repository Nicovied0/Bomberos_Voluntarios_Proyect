const express = require("express");
const router = express.Router();
const vehiclesRoutes = require("./vehicles");



router.use("/vehicles", vehiclesRoutes);



module.exports = router;

