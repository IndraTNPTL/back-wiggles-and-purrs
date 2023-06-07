const router = require("express").Router();

const { isAuthenticated } = require("../middleware/jwt.middleware");

const usersRoutes = require("../routes/user.routes");
const petsRoutes = require("../routes/pet.routes");
const foundAPetRoutes = require("../routes/FoundAPet.routes");
const donationRoutes = require("../routes/donation.routes");
const authRoutes = require("../routes/auth.routes");
const favoritesRoutes = require("../routes/favorites.routes");

router.get("/", (req, res, next) => {
	res.json({ success: true, name: "back-wiggles-and-purrs" });
});

router.use("/auth", authRoutes);

// !User has to be authenticated to have access to the rest of the app
router.use(isAuthenticated);

router.use("/users", usersRoutes);
router.use("/pets", petsRoutes);
router.use("/found-a-pet", foundAPetRoutes);
router.use("/donation", donationRoutes);
router.use("/favorites", favoritesRoutes);
// router.use("/hello");

module.exports = router;
