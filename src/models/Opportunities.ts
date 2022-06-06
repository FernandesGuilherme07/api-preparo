import mongoose from "mongoose";

const opportunitiesSchema = new mongoose.Schema(
  {
    userId: {
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
      required: true,
    },
    numberOfCndidates: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Opportunities", opportunitiesSchema);
