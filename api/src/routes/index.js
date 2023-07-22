const express = require("express");
const router = express.Router();

const vehiclesRoutes = require("./vehicles");
const authRoutes = require("./auth");
const uploadDataRoutes = require("./uploadData");
const uploadImageRoutes = require("./uploadFile");
const usersRoutes = require("./users");
const postRoutes = require("./post");


router.use("/vehicles", vehiclesRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/upload", uploadDataRoutes);
router.use("/post", postRoutes);
router.use("/uploadImage", uploadImageRoutes);

module.exports = router;
