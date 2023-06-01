require("dotenv").config({ path: "../.env" });

require("../db/index");

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/back-wiggles-and-purrs";

const User = require("../models/User.model");

const User = [
	{
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		role: "",
	},
	{
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		role: "",
	},
];
