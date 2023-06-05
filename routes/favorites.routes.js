const router = require("express").Router();
const Favorite = require("../models/favorites.model");

// Add a pet to favorites
router.post("/", async (req, res, next) => {
	try {
		const favorite = await Favorite.create(req.body);

		if (favorite) {
			res.status(201).json(favorite);
		} else {
			res.status(404).json({ error: "Couldn't add pet to favorites" });
		}
	} catch (error) {
		next(error);
	}
});

// Get all favorite pets for a user
router.get("/:userId", async (req, res, next) => {
	try {
		const favorites = await Favorite.find({
			user: req.params.userId,
		}).populate("pet");
		res.json(favorites);
	} catch (error) {
		next(error);
	}
});

// Remove a pet from favorites
router.delete("/:id", async (req, res, next) => {
	try {
		const favorite = await Favorite.findByIdAndDelete(req.params.id);
		if (favorite) {
			res.sendStatus(204);
		} else {
			res.status(404).json({ error: "Favorite not found" });
		}
	} catch (error) {
		next(error);
	}
});

// GET single favorite pet by its ID
router.get("/favorite/:id", async (req, res, next) => {
	try {
		const favorite = await Favorite.findById(req.params.id).populate("pet");
		if (favorite) {
			res.json(favorite);
		} else {
			res.status(404).json({ error: "Favorite not found" });
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
