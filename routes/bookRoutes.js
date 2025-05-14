"use strict";
// Require express
const express = require("express");
const { createBook, getAllBooks } = require("../controllers/bookController");

// Create an express routes.
const router = express.Router();

// Create routes
// ADD/ CREATE NEW BOOK
router.route("/").post(createBook).get(getAllBooks);

// Export router
module.exports = router;
