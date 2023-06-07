const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://crystinekoh:TL5tnySLlXciRWAG@cluster0.8h51dku.mongodb.net/wiggles-and-purrs?retryWrites=true&w=majority";

const Pet = require("../models/pet.model");

const pets = [
  {
    name: "Prickles",
    specie: "hedgehog",
    breed: "North African Hedgehog",
    rangeAge: "1 - 2 years",
    gender: "Female",
    size: "Small",
    color: "Brown",
    description:
      " Prickles is a spunky African Pygmy Hedgehog with a big personality. She loves exploring and snacking on juicy worms.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Atelerix_algirus.jpg",
    location: "New York City",
    available: true,
  },
  {
    name: "Spike",
    specie: "hedgehog",
    breed: "Long-Eared Hedgehog",
    rangeAge: "1 - 2 years",
    gender: "Male",
    size: "Small",
    color: "Salt and Pepper",
    description:
      "Spike is an adventurous Long-Eared Hedgehog who enjoys exploring the outdoors and digging in search of tasty treats.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Long_Eared_hedgehog.jpg",
    location: "Tokyo",
    available: true,
  },
  {
    name: "Hazel",
    specie: "hedgehog",
    breed: "Northern white-breasted hedgehog",
    rangeAge: "1 - 2 years",
    gender: "Female",
    size: "Small",
    color: "Grey",
    description:
      "Hazel is a gentle Algerian Hedgehog known for her sweet temperament. She loves snuggling up in cozy spots and playing with her favorite toys.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Erinaceus_roumanicus_2020_G2.jpg/1280px-Erinaceus_roumanicus_2020_G2.jpg",
    location: "Paris",
    available: true,
  },

  {
    name: "Quillbert",
    specie: "hedgehog",
    breed: "European Hedgehog",
    rangeAge: "2 - 5 years",
    gender: "Male",
    size: "Small",
    olor: "Dark Brown",
    description:
      "Quillbert is a curious European Hedgehog who enjoys exploring his surroundings and is always on the lookout for delicious snacks.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/1280px-Erinaceus_europaeus_LC0119.jpg",
    location: "Barcelone",
    available: true,
  },
  {
    name: "Poppy",
    specie: "hedgehog",
    breed: "Desert hedgehog",
    rangeAge: "1 - 2 years",
    gender: "Female",
    size: "Small",
    color: "Light Brown",
    description:
      "Poppy is an adorable Egyptian Long-Eared Hedgehog with a playful nature. She loves running on her exercise wheel and basking in the warm sunlight.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Desert_Hedgehog.png/1280px-Desert_Hedgehog.png",
    location: "Lisbon",
    available: true,
  },
  {
    name: "Gizmo",
    specie: "hedgehog",
    breed: "Somali Hedgehog",
    rangeAge: "1 - 2 years",
    gender: "Male",
    size: "Small",
    color: "White with Brown markings",
    description:
      "Gizmo is a charming White-Bellied Hedgehog who enjoys exploring new toys and tunnels. He is always up for an adventure and has a friendly demeanor.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Atelerix_sclateri.JPG",
    location: "Amsterdam",
    available: true,
  },
];

mongoose
  .connect(MONGODB_URI)
  .then(async (x) => {
    try {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
      // await Pet.deleteMany();

      const newPets = await Pet.create(pets);
      console.log(newPets);

      process.exit();
    } catch (error) {
      console.error("Unable to create new pets.");
      console.log(error);
    }
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  })
  .finally(() => {
    mongoose.disconnect();
    console.log("Disconnected from the database.");
  });
