const express = require("express");
const router = express.Router();

const vehiclesRoutes = require("./vehicles");
const authRoutes = require("./auth");
const uploadData = require("./uploadData");
const uploadImage = require("./uploadFile");
const usersRoutes = require("./users");

router.use("/vehicles", vehiclesRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/upload", uploadData);
router.use("/uploadImage", uploadImage);

module.exports = router;
