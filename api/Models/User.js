const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  phnumber: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, defaut: "" },
  gender: { type: String },
  // isTeacher: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  bookings: { type: [String], default: [] },
  courses: { type: [String], default: [] },
});

module.exports = mongoose.model("User", userSchema);
