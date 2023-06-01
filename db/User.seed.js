require("dotenv").config({ path: "../.env" });

require("../db/index");

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/back-wiggles-and-purrs";

const User = require("../models/User.model");

const User = [
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
