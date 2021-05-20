const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gbookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const GBook = mongoose.model("Book", gbookSchema);

module.exports = GBook;