const express = require("express");
const router = express.Router();
const Pet = require("../models/pet.model");

const { isAdmin } = require("../middleware/jwt.middleware");
const { lowerCaseParams } = require("../middleware/jwt.middleware");

// Get all pets (Admin only)
router.get("/admin", isAdmin, async (req, res, next) => {
	try {
		const pets = await Pet.find();
		res.json(pets);
	} catch (error) {
		next(error);
	}
});

// Create a new pet (Admin only)
router.post("/", isAdmin, async (req, res, next) => {
	try {
		const pet = await Pet.create(req.body);
		if (pet) {
			res.status(201).json(pet);
		} else {
			res.status(404).json({ error: "Couldn't create pet" });
		}
	} catch (error) {
		next(error);
	}
});

// Update a pet (admin only)
router.put("/:id", isAdmin, lowerCaseParams, async (req, res, next) => {
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

// Delete a pet (admin only)
router.delete("/:id", isAdmin, lowerCaseParams, async (req, res, next) => {
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

router.get("/status/:status", isAdmin, async (req, res, next) => {
	try {
		const pets = await Pet.find({ status: req.params.status });
		res.json(pets);
	} catch (error) {
		next(error);
	}
});

// Get all availables pets
router.get("/", async (req, res, next) => {
	try {
		const pets = await Pet.find({ available: true });
		res.json(pets);
	} catch (error) {
		next(error);
	}
});

// Get all non availables pets (Admin only)
router.get("/nonavailable", isAdmin, async (req, res, next) => {
	try {
		const pets = await Pet.find({ available: false });
		res.json(pets);
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by ID
router.get("/:id", lowerCaseParams, async (req, res, next) => {
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

// Get a specific pet by specie
router.get("/specie/:specie", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			specie: req.params.specie,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pets specie not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by breed
router.get("/breed/:breed", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			breed: req.params.breed,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pet breed not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by Range Age
router.get("/rangeAge/:rangeAge", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			rangeAge: req.params.rangeAge,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({
				error: "No available pets in choosen range age",
			});
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by gender
router.get("/gender/:gender", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			gender: req.params.gender,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pets gender not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by color
router.get("/color/:color", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			color: req.params.color,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pets color not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by size
router.get("/size/:size", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			size: req.params.size,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pet size not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific pet by location
router.get("/location/:location", lowerCaseParams, async (req, res, next) => {
	try {
		const pets = await Pet.find({
			available: true,
			location: req.params.location,
		});
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pets location not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Get pets using filters with multiple criteria
router.get("/", async (req, res, next) => {
	try {
		const filters = {};
		if (req.query.breed) filters.breed = req.query.breed;
		if (req.query.gender) filters.gender = req.query.gender;
		if (req.query.rangeAge) filters.rangeAge = req.query.rangeAge;
		if (req.query.size) filters.size = req.query.size;
		if (req.query.color) filters.color = req.query.color;
		if (req.query.location) filters.location = req.query.location;
		filters.available = true;

		const pets = await Pet.find(filters);
		if (pets) {
			res.json(pets);
		} else {
			res.status(404).json({ error: "Pets not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Allows users to assign a pet to themselves, useful when a user decides to adopt a pet
router.post("/assign/:id", async (req, res, next) => {
	try {
		const pet = await Pet.findById(req.params.id);
		if (!pet) {
			res.status(404).json({ error: "Pet not found" });
		} else {
			await Pet.updateOne(
				{ _id: pet._id },
				{ available: false, owner: req.user._id }
			);
			res.status(200).json({ message: "Pet has been assigned to you" });
		}
	} catch (error) {
		next(error);
	}
});

// Allows to get a list of pets a user owns
router.get("/owned", async (req, res, next) => {
	try {
		const ownedPets = await Pet.find({ owner: req.user._id });
		res.json(ownedPets);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
