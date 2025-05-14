// Require Dependencies
// express
const express = require("express");
// cors
const cors = require("cors");

// Require your own modules
const bookRoute = require("./routes/bookRoutes");
const morgan = require("morgan");

// Create express App
const app = express();

// GENERAL MIDDLEWARES
// Enable cross origin resource sharing
app.use(cors());

// Parse incoming requests in JSON format
app.use(express.json());

// For seeing reqest log details
app.use(morgan("dev"));

// ROUTE MIDDLEWARES
// book route
app.use("/api/v1/books", bookRoute);

// Export app
module.exports = app;
