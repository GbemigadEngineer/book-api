"use strict";

// REQUIRE DEPENDENCIES AND MODULES
const mongoose = require("mongoose");
const Book = require("../model/bookMode");

// IMPLEMENT ROUTE HANDLERS

// CREATE A NEW BOOK / ADD A NEW BOOK TO THE DATABSE
const createBook = async (req, res, next) => {
  try {
    // 1. Get book data from the request.body
    const { title, author, publishYear } = req.body;
    // 2. Validate the data
    if (!title || !author || !publishYear) {
      return res.status(400).json({
        status: "fail",
        message: "Error creating a new book, some important data are missing!",
      });
    }
    // 3. If validations is passed, save to the databse
    const newBook = await Book.create({
      title,
      author,
      publishYear,
    });
    // 4. Send response
    res.status(201).json({
      status: "Success!",
      message: "New book added to the databse successfully!",
      data: {
        book: newBook,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: `Internal server error! ${err}`,
    });
  }
};

// GET ALL BOOKS
const getAllBooks = async (req, res, next) => {
  try {
    // 1. GET ALL BOOKS
    const books = await Book.find();
    // 2. SEND RESPONSE
    res.status(200).json({
      status: "success!",
      message: "All books fetched successfully!",
      result: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail!",
      message: "Internal server Error",
      err,
    });
  }
};

// Export
module.exports = {
  createBook,
  getAllBooks,
};
