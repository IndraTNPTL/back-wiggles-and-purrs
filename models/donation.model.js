const { Schema, model } = require("mongoose");

const donationSchema = new Schema(
	{
		donor: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		amount: {
			type: Number,
			enum: ["5", "10", "50", "100"],
		},
	},
	{ timestamps: { createdAt: true, updatedAt: false } }
);
