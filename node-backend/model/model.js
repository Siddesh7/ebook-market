const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  coverImg: {
    type: String,
  },
  pdfUri: {
    type: String,
  },
  price: {
    type: Number,
  },
  creator: {
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
