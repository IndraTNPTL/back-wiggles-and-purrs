// Import the required modules from the 'mongoose' package
const { Schema, model } = require("mongoose");

// Define the schema for the 'Adoption form' collection in MongoDB
const AdoptionSchema = new Schema(
	{
		// Define the 'adopter' field as an ObjectId referencing the 'User' collection
		adopter: {
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

// Define the 'AdoptionForm' model using the 'AdoptionFormSchema'
const Adoption = model("Adoption", AdoptionSchema);

// Export the 'AdoptionForm' model for use in other modules
module.exports = Adoption;
