const router = require("express").Router();

const { isAdmin } = require("../middleware/jwt.middleware");

const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const FoundAPet = require("../models/FoundAPet.model");

// Create a new user
router.post("/", async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
});

// Get all users
router.get("/", isAdmin, async (req, res, next) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		next(error);
	}
});

// Get a specific user by ID
router.get("/:id", isAdmin, async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Update a user
router.put("/:id", async (req, res, next) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ error: "Update not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Delete a user
router.delete("/:id", async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (user) {
			res.sendStatus(204);
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
