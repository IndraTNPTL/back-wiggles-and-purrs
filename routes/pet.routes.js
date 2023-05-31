const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const AdoptionApplication = require("../models/adoptionApplication.model");

// Create a new pet
router.post("/", async (req, res) => {
	try {
		const pet = await Pet.create(req.body);
		res.status(201).json(pet);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// Get all pets
router.get("/", async (req, res) => {
	try {
		const pets = await Pet.find();
		res.json(pets);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get a specific pet by ID
router.get("/:id", async (req, res) => {
	try {
		const pet = await Pet.findById(req.params.id);
		if (pet) {
			res.json(pet);
		} else {
			res.status(404).json({ error: "Pet not found" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update a pet
// router.patch("/:id", async(req, res, next) => {
//   try {
//   } catch (error) {

//   }
// });
