// Require Dependencies
// express
const express = require("express");
// cors
const cors = require("cors");

// Create express App
const app = express();

// GENERAL MIDDLEWARES
// Enable cross origin resource sharing
app.use(cors());

// Parse incoming requests in JSON format
app.use(express.json());

// Export app
module.exports = app;
