import mongoose from "mongoose";

const CandidacySchema = new mongoose.Schema(
  {
    opportunities_Id: {
      type: mongoose.Types.ObjectId,
      ref: "OpportunitiesModel",
    },
    resume: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Candidacy", CandidacySchema);
