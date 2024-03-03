 // Import the Express module and create an instance of an Express router
const router = require('express').Router();

// Import the user routes from a separate file named 'userRoutes'
const userRoutes = require('./userRoutes');

// Set up the router to use the user routes under the '/user' path
router.use('/user', userRoutes);

// Export the router so that it can be used in other parts of the application
module.exports = router;