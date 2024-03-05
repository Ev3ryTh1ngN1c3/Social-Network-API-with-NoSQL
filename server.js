 // Import required modules
const express = require('express');
const db = require('./config/connection'); // Assuming this is the database connection setup
const routes = require('./routes'); // Assuming this file contains your application's routes

// Define the port for the server to listen on, using environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the defined routes for the application
app.use(routes);

// Once the database connection is open, start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});