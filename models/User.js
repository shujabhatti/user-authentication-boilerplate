const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "password is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
