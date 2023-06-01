const router = require("express").Router();

const { isAdmin } = require("../middleware/jwt.middleware");

const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const FoundAPet = require("../models/FoundAPet.model");

// Create a new Found a pet form
router.post("/", async (req, res, next) => {
	try {
		const application = await FoundAPet.create(req.body);
		res.status(201).json(application);
	} catch (error) {
		next(error);
	}
});

// Router.post('/somewhere', isAuthenticcated, (req, res, nextt) => {
//   const pet = await Pet.create(thing)
//   const newApplication = await FoundAPetForm({reporter: req.user._id, pet: pet._id})
//   rtes.send('cool')
// })

// Get all Found a pet forms
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

// Update an Found a pet form
router.patch("/:id", async (req, res, next) => {
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
