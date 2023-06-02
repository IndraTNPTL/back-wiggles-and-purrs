const router = require("express").Router();

const { isAdmin } = require("../middleware/jwt.middleware");

const Donation = require("../models/donation.model");

// Get all donations (Admin only)
router.get("/admin", isAdmin, async (req, res, next) => {
	try {
		const donations = await Donation.find();

		if (donations) {
			res.json(donations);
		} else {
			res.status(404).json({
				error: "No donation found",
			});
		}
	} catch (error) {
		next(error);
	}
});

// Create a new donation
router.post("/", async (req, res, next) => {
	try {
		const donation = await Donation.create(req.body);
		if (donation) {
			res.status(201)
				.json({
					message: "Donation created successfully",
					donation: donation,
				})
				.send("Donation created succesfully");
		} else {
			res.status(404).json({
				error: "Could not created donation, try again",
			});
		}
	} catch (error) {
		next(error);
	}
});

// Update a donation (admin only)
router.put("/:id", isAdmin, async (req, res, next) => {
	try {
		const donation = await Donation.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (donation) {
			res.json(donation);
		} else {
			res.status(404).json({ error: "Donation not found" });
		}
	} catch (error) {
		next(error);
	}
});

// Delete a donation (admin only)
router.delete("/:id", isAdmin, async (req, res, next) => {
	try {
		const donation = await Donation.findByIdAndDelete(req.params.id);
		if (donation) {
			res.sendStatus(204);
		} else {
			res.status(404).json({
				error: "Donation not found or already deleted",
			});
		}
	} catch (error) {
		next(error);
	}
});

// Get a specific donation by ID
router.get("/:id", async (req, res, next) => {
	try {
		const donation = await Donation.findById(req.params.id);
		if (donation) {
			res.json(donation);
		} else {
			res.status(404).json({ error: "Donation not found" });
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
