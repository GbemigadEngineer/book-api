// Require the app in our server file
const app = require("./app");
// Require Mongoose for database connection
const mongoose = require("mongoose");
// requirw dotenv and call the .config() immediately to help connect to the database
const dotenv = require("dotenv").config();

// Connect Express app to the database
// 1. Get your atlas databse connection string from the .env file
const DB = process.env.MONGO_URI;
// 2. Create databse connection with mongoose
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // // useCreateIndex: true,
    // // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then((connectionObject) => {
    console.log("DATABASE CONNECTION SUCCESSFUL!");
  })
  .catch((err) => {
    console.log("Error connecting to databse", err);
  });

// Listen for requests / start the server.App

const server = app.listen(3000, () => {
  console.log("Server is listening to requests at port 3000!");
});
