 // Import the Express module & create an instance of an Express router
const router = require('express').Router();

// Import the API routes from a separate file named 'api'
const apiRoutes = require('./api');

// Set up the router to use the API routes under the '/api' path
router.use('/api', apiRoutes);

// Define a fallback route that sends a response of 'Wrong route!' for any routes that do not match the defined routes
router.use((req, res) => res.send('Wrong route!'));

// Export the router so that it can be used in other parts of the application
module.exports = router;