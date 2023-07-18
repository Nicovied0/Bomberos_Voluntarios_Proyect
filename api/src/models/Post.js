const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  iframeLink: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  actived: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
