// Import the Mongoose library and destructure the Schema and model
const { Schema, model } = require("mongoose");

// Define the pet schema with the required fields and their types
const petSchema = new Schema(
	{
		name: String,
		specie: {
			type: String,
			enum: ["dog", "cat", "hedgehog"],
		},
		breed: {
			type: String,
			enum: [
				"Husky",
				"Akita",
				"Shepherd",
				"Golden Retriever",
				"Schnauzer",
				"Pomeranian",
				"Beagle",
				"Dachshund",
				"Pug",
				"Poodle",
				"Bichon Frise",
				"Russian Blue",
				"Cocker Spaniel",
				"Sphynx",
				"Sheepdog",
				"Chartreux",
				"Birman",
				"Bulldog",
				"Exotic Shorthair",
				"Munchkin",
				"British Shorthair",
				"Bengal",
				"Siamese",
				"Russian Blue",
				"Japanese Bobtail",
				"Persian",
				"Ragamuffin",
				"Snowshoe",
				"Cape Hedgehog",
				"Long-Eared Hedgehog",
				"European Hedgehog",
				"North African Hedgehog",
				"Northern white-breasted hedgehog",
				"African Pygmy Hedgehog",
				"Desert hedgehog",
				"Somali Hedgehog",
				// "Others",
			],
		},
		rangeAge: {
			type: String,
			enum: [
				"Under 6 months",
				"6 - 12 months",
				"1 - 2 years",
				"2 - 5 years",
				"5 - 7 years",
				"8 + years",
			],
		},
		gender: {
			type: String,
			enum: ["Female", "Male", "Unknown"],
		},
		size: {
			type: String,
			enum: ["Small", "Medium", "Large"],
		},
		color: [String],
		description: String,
		photo: String,
		foundDate: Date,
		location: String,
		available: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true } // Enable timestamps for createdAt and updatedAt fields
);

// Use the Mongoose model with the name "Pet"
const Pet = model("Pet", petSchema);

// Export the Pet model
module.exports = Pet;
