 // Import the Express module & create an instance of an Express router
const router = require('express').Router();

// Import specific controller functions from the userController file using object destructuring
const { getUsers, getSoloUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

// Define routes for different HTTP methods & endpoints, associating them with corresponding controller functions
router.route('/').get(getUsers).post(createUser); // Route for getting all users & creating a new user
router.route('/:userId').get(getSoloUser).put(updateUser).delete(deleteUser); // Route for getting, updating & deleting a specific user
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend); // Route for adding & deleting a friend for a specific user

// Export the router so that it can be used in other parts of the application
module.exports = router;n