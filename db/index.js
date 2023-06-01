// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ // Set the MongoDB URI for our app to have access to it
// If no environment variable is set, we use a default URI
// pointing to a local MongoDB instance at 127.0.0.1:27017
// and a database named "back-wiggles-and-purrs"
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
	process.env.MONGODB_URI ||
	"mongodb://127.0.0.1:27017/back-wiggles-and-purrs";

// Connect to the MongoDB using the URI we defined above
// This returns a promise that resolves with the connection object
mongoose
	.connect(MONGO_URI)
	.then((x) => {
		// If the connection is successful, log the database name
		const dbName = x.connections[0].name;
		console.log(`Connected to Mongo! Database name: "${dbName}"`);
	})
	.catch((err) => {
		// If an error occurs while connecting, log the error
		console.error("Error connecting to mongo: ", err);
	});
