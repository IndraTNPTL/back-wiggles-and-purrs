const router = require("express").Router();

app.get("/hello", (req, res) => {
	res.json({ message: "Hello, world!" });
});

module.exports = router;
