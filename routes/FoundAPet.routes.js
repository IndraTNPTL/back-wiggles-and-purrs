const router = require("express").Router();

const { isAdmin } = require("../middleware/jwt.middleware");

const Pet = require("../models/pet.model");
const FoundAPet = require("../models/FoundAPet.model");

// Create a new pet (available:false) & create a new Found a pet application (status:pending)
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

// Approve a Found a pet application (Admin only)
router.post("/approve/:id", isAdmin, async function (req, res, next) {
	try {
		// Get the FoundAPet document by ID
		const foundAPet = await FoundAPet.findByIdAndUpdate(
			req.params.id,
			{ status: "approved" },
			{
				new: true,
			}
		);
		if (foundAPet) {
			console.log(foundAPet);
			res.status(201).json({
				message: "Your submission has been accepted",
			});
		} else {
			res.status(404).json({ error: "Aplication not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Reject a Found a pet application (Admin only)
router.post("/reject/:id", isAdmin, async function (req, res, next) {
	try {
		// Get the FoundAPet document by ID
		const foundAPet = await FoundAPet.findByIdAndUpdate(
			req.params.id,
			{ status: "rejected" },
			{
				new: true,
			}
		);
		if (foundAPet) {
			console.log(foundAPet);
			res.status(201).json({
				message: "Your submission has been rejected",
			});
		} else {
			res.status(404).json({ error: "Aplication not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get all approved Found Pet application
router.get("/approved", async (req, res, next) => {
	try {
		const foundAPet = await FoundAPet.find({ status: "approved" });
		res.json(foundAPet);
	} catch (error) {
		next(error);
	}
});

// Get all pending Found Pet application
router.get("/pending", async (req, res, next) => {
	try {
		const foundAPet = await FoundAPet.find({ status: "pending" });
		res.json(foundAPet);
	} catch (error) {
		next(error);
	}
});

// Get all rejected Found Pet application
router.get("/rejected", async (req, res, next) => {
	try {
		const foundAPet = await FoundAPet.find({ status: "rejected" });
		res.json(foundAPet);
	} catch (error) {
		next(error);
	}
});

// Turn the pet availability to true if a FoundAPet and the status is "approved"
router.post("/approved/:id", isAdmin, async function (req, res, next) {
	try {
		// Get the FoundAPet document by ID
		const foundAPet = await FoundAPet.findById(req.params.id);

		// Check if the document is a FoundAPet and the status is "approved"
		if (foundAPet && foundAPet.status === "approved") {
			// Update the pet's availability to true
			await Pet.findByIdAndUpdate(foundAPet.pet, { available: true });
			res.json({ message: "Pet is available to find a new home ❤️" });
		} else {
			res.status(400).json({ error: "Invalid request" });
		}
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
