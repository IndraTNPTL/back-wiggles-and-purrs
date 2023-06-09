// Import the required modules
const jsonWebToken = require("jsonwebtoken");
const User = require("../models/User.model");

// Define the 'isAuthenticated' middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
	// Extract the token from the request headers
	let token = req.headers.authorization;
	console.log(token);

	// If no token is found, return an error message
	if (!token) {
		return res.status(400).json({ message: "No token found!" });
	}
	// Remove the 'Bearer ' prefix from the token because Bearer is a convention term to identify the token's bearer. It is not part of the token body
	token = token.replace("Bearer ", "");

	// Verify the token using the secret key
	const userToken = jsonWebToken.verify(token, process.env.TOKEN_SECRET);

	console.log(userToken);

	try {
		// Find the user based on the username in the token
		const user = await User.findById(userToken._id);
		if (!user) {
			return res.status(400).json({ message: "Invalid token" });
		}
		// Attach the user object to the request object
		req.user = user;
		// Once everything went well, go to the next middleware
		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid token" });
	}
};

// const isAuthenticated = async (req, res, next) => {
// 	let token = req.headers.authorization.split(" ")[1];
// 	console.log(token);

// 	if (!token) {
// 		return res.status(400).json({ message: "No token found!" });
// 	}

// 	try {
// 		const userToken = jsonWebToken.verify(token, process.env.JWTPRIVATEKEY);

// 		if (!userToken) {
// 			return res.status(400).json({ message: "Invalid token" });
// 		}

// 		req.user = userToken;

// 		// Attach the user object to the request object
// 		req.user = await User.findById(userToken._id);

// 		// Once everything went well, go to the next middleware
// 		next();
// 	} catch (error) {
// 		return res.status(401).json({ message: "Invalid token" });
// 	}
// };

// Define the 'isAdmin' middleware to check if the user has an 'admin' role
const isAdmin = (req, res, next) => {
	console.log(req.user);
	if (req.user.role === "admin") {
		next();
	} else {
		return res.status(401).json({ message: "Denied !" });
	}
};

// Make routes case-insensitives
function lowerCaseParams(req, res, next) {
	const lowerCasedParams = Object.fromEntries(
		Object.entries(req.params).map(([key, value]) => [
			key,
			value.toLowerCase(),
		])
	);
	req.params = lowerCasedParams;
	next();
}

// Export the middlewares for use in other modules
module.exports = { isAuthenticated, isAdmin, lowerCaseParams };
