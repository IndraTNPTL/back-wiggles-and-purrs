// Import the express package which is a Node.js web application framework.
// It simplifies handling HTTP requests.
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Create an instance of an Express application.
const app = express();

// CORS
const cors = require("cors");

// ℹ️ // Import the dotenv package which allows access to environment variables/settings.
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// Import and run the database connection configuration.
// ℹ️ Connects to the database
require("./db");

app.use(cors());

// Import and run the middleware configuration.
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// Import the authentication routes and mount them on the '/auth' path.
// These routes handle user authentication (e.g., login, signup, etc.).
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Import the index routes and mount them on the '/api' path.
// These routes handle the main application functionality.
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

// ❗ // Import and run the error handling configuration.
// This handles errors for routes that don't exist or errors that are handled in specific routes.
require("./error-handling")(app);

// Export the Express application instance to be used by other modules.
module.exports = app;
