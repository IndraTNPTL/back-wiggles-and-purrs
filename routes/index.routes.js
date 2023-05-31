const router = require("express").Router();

router.get("/", (req, res, next) => {
	res.json({ success: true, name: "back-wiggles-and-purrs" });
});

router.use("/users", usersRoutes);
router.use("/pets", petsRoutes);

module.exports = router;
