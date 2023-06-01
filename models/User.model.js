// Import the required modules from the 'mongoose' package
const { Schema, model } = require("mongoose");

// Define the schema for the 'User' collection in MongoDB
const userSchema = new Schema(
	{
		// Define the 'firstname' field as a String with a required attribute
		firstname: {
			type: String,
			required: [true, "Firstname is required."],
		},
		// Define the 'lastname' field as a String with a required attribute
		lastname: {
			type: String,
			required: [true, "Lastname is required."],
		},
		// Define the 'email' field as a String with validation for required, unique, lowercase, and trim attributes
		email: {
			type: String,
			required: [true, "Email is required."],
			unique: true,
			lowercase: true,
			trim: true,
		},
		// Define the 'password' field as a String with a required attribute
		password: {
			type: String,
			required: [true, "Password is required."],
		},
		// Define the 'role' field as a String with enum validation for the values 'admin' and 'user', and a default value of 'user'
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
	},

	// this second object adds extra properties: `createdAt` and `updatedAt`
	{ timestamps: true }
);

// Define the 'User' model using the 'userSchema'
const User = model("User", userSchema);

// Export the 'User' model for use in other modules
module.exports = User;
