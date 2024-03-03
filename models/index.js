 // Require the User module from the User.js file
const User = require('./User');

// Require the Thought module from the Thought.js file
const Thought = require('./Thought');

// Export an object containing the User & Thought modules for use in other files
module.exports = { User, Thought };