const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
	{
		Firstname: {
			type: String,
			required: [true, "Firstname is required."],
		},

		Lastname: {
			type: String,
			required: [true, "Lastname is required."],
		},

		email: {
			type: String,
			required: [true, "Email is required."],
			unique: true,
			lowercase: true,
			trim: true,
		},

		password: {
			type: String,
			required: [true, "Password is required."],
		},

		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: { createdAt: true, updatedAt: false },
	}
);

const User = model("User", userSchema);

module.exports = User;
