const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Pet = require("../models/pet.model");
const AdoptionApplication = require("../models/adoptionApplication.model");

// Define your routes here

// User Routes

// Create a new user

router.post("/", async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// Get all users
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get a specific user by ID
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update a user
router.put("/:id", async (req, res) => {
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
		res.status(500).json({ error: error.message });
	}
});

// Delete a user
route.delete("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.pqrams.id);
		if (user) {
			res.sendStatus(204);
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
