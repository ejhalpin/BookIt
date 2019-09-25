const mongoose = require("mongoose");

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    description: String,
    image: String,
    link: { type: String, required: true, unique: true }
  })
);

module.exports = Book;
