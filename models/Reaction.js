const { Schema, Types } = require('mongoose');

// Define a Mongoose schema for reactions
const reactionSchema = new Schema(
    {
        // Unique identifier for the reaction
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), // Set a default value to a new ObjectId
        },
        // The body of the reaction
        reactionBody: {
            type: String,
            required: true, // Reaction body is a required field
            maxLength: 280, // Maximum length of 280 characters
        },
        // The username associated with the reaction
        username: {
            type: String,
            required: true, // Username is a required field
        },
        // The timestamp when the reaction was created
        createdAt: {
            type: Date,
            default: Date.now, // Set default value to the current timestamp
        },
    },
    {
        // Configure options for the schema
        toJSON: {
            virtuals: true, // Include virtual properties when converting to JSON
        },
        id: false, // Exclude the default _id field when converting to JSON
    }
);

// Export the reaction schema for use in other parts of the application
module.exports = reactionSchema;