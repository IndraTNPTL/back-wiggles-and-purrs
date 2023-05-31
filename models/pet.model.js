const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    name: String,
    specie: {
      type: String,
      enum: ["dog", "cat"],
    },
    breed: {
      type: String,
      enum: [
        "Husky",
        "Akita",
        "Shepherd",
        "Retriever",
        "Pug",
        "Chartreux",
        "Birman",
        "Persian",
        "Ragamuffin",
        "Snowshoe",
        "Unknown",
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
  { timestamps: true }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;
