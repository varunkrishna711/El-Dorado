const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String },
  details: { type: String, required: true },
  organiser: { type: String, required: true },
  location: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  isBooked: { type: Boolean, default: false },
  price: { type: String },
  img: { type: String },
});

module.exports = mongoose.model("Event", eventSchema);
