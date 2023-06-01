// Export a function that takes the 'app' instance as an argument
module.exports = (app) => {
	// Middleware to handle 404 (Not Found) errors
	app.use((req, res, next) => {
		// Set the response status to 404 and send a JSON object with a message
		res.status(404).json({ message: "This route does not exist" });
	});

	// Error handling middleware
	app.use((err, req, res, next) => {
		// whenever you call next(err), this middleware will handle the error
		// Log the error details to the console
		console.error("ERROR", req.method, req.path, err);

		// only render if the error ocurred before sending the response
		// If the headers have not been sent yet, set the status to 500 (Internal Server Error) and send a JSON object with a message
		if (!res.headersSent) {
			res.status(500).json({
				message: "Internal server error. Check the server console",
			});
		}
	});
};
