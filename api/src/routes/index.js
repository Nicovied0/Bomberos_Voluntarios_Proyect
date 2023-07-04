const express = require("express");
const router = express.Router();

const vehiclesRoutes = require("./vehicles");
const loginRoutes = require("./login");
const uploadData = require("./uploadData");


router.use("/vehicles", vehiclesRoutes);
router.use("/login", loginRoutes);
router.use("/upload", uploadData);


module.exports = router;
