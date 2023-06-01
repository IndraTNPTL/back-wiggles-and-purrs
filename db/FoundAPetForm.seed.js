require("dotenv").config({ path: "../.env" });

require("../db/index");

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/back-wiggles-and-purrs";

const FoundAPetForm = require("../models/FoundAPetForm.model");

const FoundAPetForms = [
  {
    name: "Prickles",
    species: "hedgehog",
    breed: "African Pygmy Hedgehog",
    gender: "Female",
    size: "Small",
    color: ["Salt and Pepper"],
    description:
      "Prickles may be small, but she's a master escape artist. Don't be surprised if you find her rolling around in the most unexpected places!",
    photo: "",
    foundDate: "April 7, 2022",
    location: "London",
    contactInfo: {
      name: "Toheeb",

      phone: "0745781256",
      email: "toheeb@abc.com",
    },
    status: "pending",
  },
  {
    name: "Quills",
    species: "hedgehog",
    breed: "European Hedgehog",
    gender: "Male",
    size: "Small",
    color: ["Brown"],
    description:
      "Quills is a mischievous hedgehog with a knack for finding hidden treats. Be prepared for some adorable snack stashing adventures!",
    photo: "",
    foundDate: "September 10, 2022",
    location: "Berlin",
    contactInfo: {
      name: "Sonia",

      phone: "0745456256",
      email: "sonia@efg.com",
    },
    status: "pending",
  },
  {
    name: "Spiky",
    species: "hedgehog",
    breed: "Long-Eared Hedgehog",
    gender: "Female",
    size: "Small",
    color: ["Albino"],
    description:
      "Spiky might have long ears, but she's not much of a listener. She's too busy exploring and creating chaos in her wake!",
    photo: "",
    foundDate: "January 28, 2023",
    location: "Tokyo",
    contactInfo: {
      name: "Antoine",

      phone: "0745789065",
      email: "antoine@iron.com",
    },
    status: "pending",
  },
  {
    name: "Sonic",
    species: "hedgehog",
    breed: "Cape Hedgehog",
    gender: "Male",
    size: "Small",
    color: ["Black"],
    description:
      "Sonic is a hedgehog with an insatiable need for speed. He'll zoom around his enclosure, leaving a trail of cuteness behind!",
    photo: "",
    foundDate: "May 5, 2023",
    location: "New York City",
    contactInfo: {
      name: "Moe",

      phone: "0700455306",
      email: "moe@iron.com",
    },
    status: "pending",
  },
];
mongoose
  .connect(MONGODB_URI)
  .then(async (x) => {
    try {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
      await FoundAPetForm.deleteMany();

      const newFoundAPetForms = await FoundAPetForm.create(foundAPetForms);
      console.log(newFoundAPetForms);

      process.exit();
    } catch (error) {
      console.error("Unable to create new form.");
    }
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  })
  .finally(() => {
    mongoose.disconnect();
    console.log("Disconnected from the database.");
  });
