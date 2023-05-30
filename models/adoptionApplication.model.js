const { Schema, model } = require("mongoose");

const adoptionApplicationSchema = new Schema(
	{
		applicant: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		pet: {
			type: Schema.Types.ObjectId,
			ref: "Pet",
		},
		status: {
			type: String,
			enum: ["pending", "approved", "rejected"],
		},
	},
	{ timestamps: { createdAt: true, updatedAt: false } }
);

const AdoptionApplication = model(
	"AdoptionApplication",
	adoptionApplicationSchema
);

module.exports = AdoptionApplication;
