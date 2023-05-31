const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const AdoptionApplication = require("../models/adoptionApplication.model");

// Create a new adoption application
router.post("/adoption-applications", async (req, res, next) => {
  try {
    const application = await AdoptionApplication.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
});

// Get all adoption applications
router.get("/adoption-applications", async (req, res, next) => {
  try {
    const applications = await AdoptionApplication.find();
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

// Get a specific adoption application by ID
router.get("/adoption-applications/:id", async (req, res, next) => {
  try {
    const application = await AdoptionApplication.findById(req.params.id);
    if (application) {
      res.json(application);
    } else {
      res.status(404).json({ error: "Adoption application not found" });
    }
  } catch (error) {
    next(error);
  }
});

// Update an adoption application
router.put("/adoption-applications/:id", async (req, res, next) => {
  try {
    const application = await AdoptionApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (application) {
      res.json(application);
    } else {
      res.status(404).json({ error: "Adoption application not found" });
    }
  } catch (error) {
    next(error);
  }
});

// Delete an adoption application
router.delete("/adoption-applications/:id", async (req, res, next) => {
  try {
    const application = await AdoptionApplication.findByIdAndDelete(
      req.params.id
    );
    if (application) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Adoption application not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
