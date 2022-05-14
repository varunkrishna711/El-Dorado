const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  // id: { type: Number, unique: true },
  name: { type: String },
  details: { type: String },
  teacher: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  students: { type: [String], default: 0 },
  img: { type: String },
});

module.exports = mongoose.model("Course", courseSchema);
