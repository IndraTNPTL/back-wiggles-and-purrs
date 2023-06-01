const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/back-wiggles-and-purrs";

const User = require("../models/User.model");

const Users = [
	{
		firstname: "Indra",
		lastname: "Tinot-Patole",
		email: "indra@purrs.com",
		password: "1234",
		role: "admin",
	},
	{
		firstname: "Crystine",
		lastname: "Koh",
		email: "crystine@wiggles.com",
		password: "4321",
		role: "admin",
	},
	{
		firstname: "Eli",
		lastname: "Harb",
		email: "eli@thesphere.com",
		password: "6789",
		role: "user",
	},
];

mongoose
	.connect(MONGODB_URI)
	.then(async (x) => {
		try {
			console.log(
				`Connected to Mongo! Database name: "${x.connections[0].name}"`
			);
			await User.deleteMany();

			const newUsers = await User.create(Users);
			console.log(newUsers);

			process.exit();
		} catch (error) {
			console.error("Unable to create new user.");
		}
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB: " + err);
	})
	.finally(() => {
		mongoose.disconnect();
		console.log("Disconnected from the database.");
	});
