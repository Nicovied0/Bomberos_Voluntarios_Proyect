const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: false },
  description: { type: String, required: false },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
