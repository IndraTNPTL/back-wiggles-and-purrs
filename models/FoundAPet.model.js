// Import the required modules from the 'mongoose' package
const { Schema, model } = require("mongoose");

// Define the schema for the 'FoundAPetForm' collection in MongoDB
const FoundAPetSchema = new Schema(
	{
		// Define the 'reporter' field as an ObjectId referencing the 'User' collection
		reporter: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		// Define the 'pet' field as an ObjectId referencing the 'Pet' collection
		pet: {
			type: Schema.Types.ObjectId,
			ref: "Pet",
		},

		// Define the 'status' field as a string with enum validation for 'pending', 'approved', and 'rejected'
		status: {
			type: String,
			enum: ["pending", "approved", "rejected"],
			default: "pending",
		},
	},
	{ timestamps: true }
);

// Define the 'FoundAPetForm' model using the 'FoundAPetFormSchema'
const FoundAPet = model("FoundAPet", FoundAPetSchema);

// Export the 'FoundAPetForm' model for use in other modules
module.exports = FoundAPet;
