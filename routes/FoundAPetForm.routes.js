const router = require("express").Router();

const { isAdmin } = require("../middleware/jwt.middleware");

const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const FoundAPetForm = require("../models/FoundAPetForm.model");

// Create a new Found a pet form
router.post("/", async (req, res, next) => {
	try {
		const application = await FoundAPetForm.create(req.body);
		res.status(201).json(application);
	} catch (error) {
		next(error);
	}
});

// Get all Found a pet forms
router.get("/", isAdmin, async (req, res, next) => {
	try {
		const applications = await FoundAPetForm.find();
		res.json(applications);
	} catch (error) {
		next(error);
	}
});

// Get a specific Found a pet form by ID
router.get("/:id", async (req, res, next) => {
	try {
		const application = await FoundAPetForm.findById(req.params.id);
		if (application) {
			res.json(application);
		} else {
			res.status(404).json({ error: "Found a Pet form not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Update an Found a pet form
router.patch("/:id", async (req, res, next) => {
	try {
		const application = await FoundAPetForm.findByIdAndUpdate(
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
		const application = await FoundAPetForm.findByIdAndDelete(
			req.params.id
		);
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
