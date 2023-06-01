// Import the required modules from the 'mongoose' package
const { Schema, model } = require("mongoose");

// Define the schema for the 'Donation' collection in MongoDB
const donationSchema = new Schema(
	{
		// Define the 'donor' field as an ObjectId referencing the 'User' collection
		donor: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		// Define the 'amount' field as a Number with enum validation for the values 5, 10, 50, and 100
		amount: {
			type: Number,
			enum: [5, 10, 50, 100],
		},
	},
	{ timestamps: true }
);

// Define the 'Donation' model using the 'donationSchema'
const Donation = model("Donation", donationSchema);

// Export the 'Donation' model for use in other modules
module.exports = Donation;
