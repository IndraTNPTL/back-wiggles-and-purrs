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
      default: "pending",
    },
  },
  { timestamps: true }
);

const AdoptionApplication = model(
  "AdoptionApplication",
  adoptionApplicationSchema
);

module.exports = AdoptionApplication;
