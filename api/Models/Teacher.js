const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  phnumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, defaut: "" },
  age: { type: String, defaut: 0 },
  address: { type: String, required: true, default: "" },
  isAdmin: { type: Boolean, default: false },
  gender: { type: String },

  courses: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  students: { type: String, default: 0 },
});

module.exports = mongoose.model("Teacher", teacherSchema);
