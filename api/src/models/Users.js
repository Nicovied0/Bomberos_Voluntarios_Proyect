const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("User", UsersSchema);

module.exports = Users;
