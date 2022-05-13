const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, defaut: "" },
  isAdmin: { type: Boolean, default: false },
  courses: { type: [String], default: [] },
  isVerified: { type: Boolean, default: false },
  students: { type: Number, default: 0 },
});

module.exports = mongoose.model("Teacher", teacherSchema);
