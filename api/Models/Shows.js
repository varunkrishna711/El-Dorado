const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  name: { type: String },
  imgurl: { type: String, required: true },
});

module.exports = mongoose.model("Show", showSchema);
