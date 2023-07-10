const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: "https://img.icons8.com/ios-glyphs/90/user--v1.png",
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    default:"555555"
  },
  password: {
    type: String,
    required: true,
    default: "userpass",
  },
  role: {
    type: String,
    default: "public",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
