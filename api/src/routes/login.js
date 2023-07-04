const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json("Ruta login")
});

router.post("/", async (req, res) => {});

module.exports = router;
