const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const AdoptionApplication = require("../models/adoptionApplication.model");

// Create a new pet
router.post("/pets", async (req, res, next) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (error) {
    next(error);
  }
});

// Get all pets
router.get("/pets", async (req, res, next) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    next(error);
  }
});

// Get a specific pet by ID
router.get("/pets/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    next(error);
  }
});

// Update a pet
router.put("/pets/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    next(error);
  }
});

// Delete a pet
router.delete("/pets/:id", async (req, res, next) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (pet) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Pet not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
