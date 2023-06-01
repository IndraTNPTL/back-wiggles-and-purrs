const router = require("express").Router();

const { isAuthenticated } = require("../middleware/jwt.middleware");

const usersRoutes = require("../routes/user.routes");
const petsRoutes = require("../routes/pet.routes");
const FoundAPet = require("./FoundAPet.routes");

router.get("/", (req, res, next) => {
	res.json({ success: true, name: "back-wiggles-and-purrs" });
});

// !User has to be authenticated to have access to the rest of the app
router.use(isAuthenticated);

router.use("/users", usersRoutes);
router.use("/pets", petsRoutes);

module.exports = router;
