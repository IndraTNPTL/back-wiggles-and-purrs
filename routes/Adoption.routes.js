const router = require("express").Router();
const Adoption = require("../models/Adoption.model");
const { isAdmin } = require("../middleware/jwt.middleware");

// Create a new adoption application
router.post("/", async (req, res, next) => {
	try {
		const { adopter, pet, userName, userEmail } = req.body;

		// Check if the adopter and pet already exist in the database
		const adopterRecord = await Adoption.findOne({ _id: adopter });
		const petRecord = await Adoption.findOne({ _id: pet });

		if (!adopterRecord || !petRecord) {
			return res.status(400).send("Adopter or Pet not found");
		}

		// Create a new adoption record
		const newAdoption = new Adoption({
			adopter: adopterRecord._id,
			pet: petRecord._id,
			status: "pending",
			userName: userName,
			userEmail: userEmail,
		});

		await newAdoption.create();
		res.status(201).send("Adoption record created");
	} catch (error) {
		res.status(500).send("Error creating adoption record");
	}
});

// Get all adoption applications for a specific pet
router.get("/pet/:petId", isAdmin, async (req, res, next) => {
	try {
		const adoptions = await Adoption.find({ pet: req.params.petId });
		res.json({ adoptions });
	} catch (error) {
		next(error);
	}
});

// Get all adoption applications for a specific user
router.get("/user/:userId", isAdmin, async (req, res, next) => {
	try {
		const adoptions = await Adoption.find({ adopter: req.params.userId });
		res.json({ adoptions });
	} catch (error) {
		next(error);
	}
});

// Approve an adoption application (Admin only)
router.post("/approve/:id", isAdmin, async function (req, res, next) {
	try {
		const adoption = await Adoption.findByIdAndUpdate(
			req.params.id,
			{ status: "approved" },
			{
				new: true,
			}
		);
		if (adoption) {
			res.status(201).json({
				message: "Adoption application approved.",
			});
		} else {
			res.status(404).json({ error: "Adoption application not found." });
		}
	} catch (error) {
		next(error);
	}
});

// Reject an adoption application (Admin only)
router.post("/reject/:id", isAdmin, async function (req, res, next) {
	try {
		const adoption = await Adoption.findByIdAndUpdate(
			req.params.id,
			{ status: "rejected" },
			{
				new: true,
			}
		);
		if (adoption) {
			res.status(201).json({
				message: "Adoption application rejected.",
			});
		} else {
			res.status(404).json({ error: "Adoption application not found." });
		}
	} catch (error) {
		next(error);
	}
});

// Get all approved adoption applications
router.get("/approved", isAdmin, async (req, res, next) => {
	try {
		const adoptions = await Adoption.find({ status: "approved" });
		res.json({ adoptions });
	} catch (error) {
		next(error);
	}
});

// Get all pending adoption applications
router.get("/pending", isAdmin, async (req, res, next) => {
	try {
		const adoptions = await Adoption.find({ status: "pending" });
		res.json({ adoptions });
	} catch (error) {
		next(error);
	}
});

// Get all rejected adoption applications
router.get("/rejected", isAdmin, async (req, res, next) => {
	try {
		const adoptions = await Adoption.find({ status: "rejected" });
		res.json({ adoptions });
	} catch (error) {
		next(error);
	}
});

// Delete an adoption application
router.delete("/:id", async (req, res, next) => {
	try {
		const adoption = await Adoption.findByIdAndDelete(req.params.id);
		if (adoption) {
			res.sendStatus(204);
		} else {
			res.status(404).json({ error: "Adoption application not found." });
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
