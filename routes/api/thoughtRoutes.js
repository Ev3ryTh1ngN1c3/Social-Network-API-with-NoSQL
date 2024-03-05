// Added routes for getting, creating, updating, & deleting thoughts & reactions in thoughtController
const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addThoughtReaction, removeThoughtReaction } = require('../../controllers/thoughtController');

// Get all thoughts & create a new thought
router.route('/').get(getThoughts).post(createThought);

// Get a single thought, update a thought, or delete a thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Add a reaction to a thought
router.route('/:thoughtId/reactions/').post(addThoughtReaction);

// Remove a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
