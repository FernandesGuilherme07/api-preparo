import mongoose from "mongoose";

const opportunitiesSchema = new mongoose.Schema(
  {
    user_Id: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
    },
    candidates: {
      type: Array,
    },
    numberOfCandidates: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OpportunitiesModel = mongoose.model(
  "Opportunities",
  opportunitiesSchema
);
