 // Import required modules from Mongoose
const { Schema, model } = require('mongoose');
// Import the Reaction schema
const reactionSchema = require('./Reaction');

// Define the schema for the Thought model
const thoughtSchema = new Schema (
    {
        // Define the thoughtText field with validation
        thoughtText: {
            type: String,
            required: true,
            minlength: 1, // Minimum length of 1 character
            maxlength: 280, // Maximum length of 280 characters
        },
        // Define the createdAt field with default value
        createdAt: {
            type: Date,
            default: Date.now, // Default value is the current timestamp
        },
        // Define the username field with validation
        username: {
            type: String,
            required: true,
        },
        // Define the reactions field as an array of reactionSchema
        reactions: [reactionSchema]
    },
    {
        // Define schema options
        toJSON: {
            virtuals: true, // Include virtual fields when converting to JSON
        },
        id: false, // Disable the default _id field
    }
);

// Define a virtual field to calculate the reaction count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length; // Return the length of the reactions array
});

// Create the Thought model based on the schema
const Thought = model('thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;