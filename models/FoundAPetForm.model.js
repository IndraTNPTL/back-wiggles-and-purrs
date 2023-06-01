// Import the required modules from the 'mongoose' package
const { Schema, model } = require("mongoose");

// Define the schema for the 'FoundAPetForm' collection in MongoDB
const FoundAPetFormSchema = new Schema(
  {
    // Define the 'reporter' field as an ObjectId referencing the 'User' collection
    reporter: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // Define the 'pet' field as an ObjectId referencing the 'Pet' collection
    pet: {
      type: String,
      enum: ["dog", "cat"],
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
        "Pug",
        "Poodle",
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
        "Japanese Bobtail",
        "Persian",
        "Ragamuffin",
        "Snowshoe",
        "Unknown",
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

    contactInfo: {
      name: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
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
const FoundAPetForm = model("FoundAPetForm", FoundAPetFormSchema);

// Export the 'FoundAPetForm' model for use in other modules
module.exports = FoundAPetForm;
