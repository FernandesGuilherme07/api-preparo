import mongoose from "mongoose";

const CandidacySchema = new mongoose.Schema(
  {
    opportunities_id: {
      type: mongoose.Types.ObjectId,
      ref: "OpportunitiesModel",
    },
    resume: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Candidacy", CandidacySchema);
