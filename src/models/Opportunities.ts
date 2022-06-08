import mongoose from "mongoose";

const opportunitiesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    user_id: {
      type: String,
      required: true,
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
    candidates: [
      {
        nameCandidate: {
          type: String,
          required: true,
        },
        emailCandidate: {
          type: String,
          required: true,
        },
        resume: {
          type: String,
          required: true,
        },
        required: false,
      },
    ],
    numberOfCandidates: {
      type: Number,
      default: 0,
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
