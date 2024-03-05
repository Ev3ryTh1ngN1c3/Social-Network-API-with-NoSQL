 // Import necessary modules from Mongoose
const { Schema, model } = require('mongoose');

// Define the User Schema
const userSchema = new Schema(
  {
    // Define the userName field with specific properties
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // Define the email field with specific properties including email validation
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // Define the thoughts field as an array of ObjectIds referencing the 'thought' model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }
    ],
    // Define the friends field as an array of ObjectIds referencing the 'user' model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    // Define schema settings
    toJSON: {
      virtuals: true, // Include virtual properties when converting to JSON
    },
    id: false, // Exclude the 'id' field from the schema
  }
);

// Define a virtual property 'friendCount' to calculate the number of friends a user has
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model based on the User Schema
const User = model('User', userSchema);

// Export the User model
module.exports = User;