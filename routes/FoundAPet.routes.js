const router = require("express").Router();

const { isAdmin } = require("../middleware/jwt.middleware");

const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const FoundAPet = require("../models/FoundAPet.model");

router.post("/", async (req, res, next) => {
  try {
    const pet = await Pet.create(req.body);
    const newApplication = await FoundAPet.create({
      reporter: req.user._id,
      pet: pet._id,
    });
    res.status(201).json({ pet, newApplication });
  } catch (error) {
    next(error);
  }
});

// Get all Found a pet forms (admin only)
router.get("/", isAdmin, async (req, res, next) => {
  try {
    const applications = await FoundAPet.find();
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

// Get a specific Found a pet form by ID
router.get("/:id", async (req, res, next) => {
  try {
    const application = await FoundAPet.findById(req.params.id);
    if (application) {
      res.json(application);
    } else {
      res.status(404).json({ error: "Found a Pet form not found" });
    }
  } catch (error) {
    next(error);
  }
});

// Update an Found a pet form (admin only)
router.patch("/:id", isAdmin, async (req, res, next) => {
  try {
    const application = await FoundAPet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (application) {
      res.json(application);
    } else {
      res.status(404).json({ error: "Found a pet form not found" });
    }
  } catch (error) {
    next(error);
  }
});

// Delete a Found a pet form
router.delete("/:id", async (req, res, next) => {
  try {
    const application = await FoundAPet.findByIdAndDelete(req.params.id);
    if (application) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Found a pet form not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
