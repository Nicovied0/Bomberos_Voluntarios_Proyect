const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: "https://i.imgur.com/7kNllwK.png",
  },
  text: {
    type: String,
    required: true,
  },
  actve: {
    type: Boolean,
    default: true,
  },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
