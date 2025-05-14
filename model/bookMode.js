"use strict";
// Require Mongoose
const mongoose = require("mongoose");

// Create schema
const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please put in a book title!"],
    },
    author: {
      type: String,
      required: [true, "Please input the author of the book!"],
    },
    publishYear: {
      type: Number,
      required: [true, "Please input year of publishing!"],
    },
  },
  { timestamps: true }
);

// Create Model
const Book = mongoose.model("Book", BookSchema);

// Export Model
module.exports = Book;
