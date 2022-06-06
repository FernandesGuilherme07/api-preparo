import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    user_Id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: {
        cep: String,
        country: String,
        state: String,
        city: String,
        street: String,
        number: String,
        complement: {
          type: String,
          required: false,
        },
      },
      required: true,
    },
    brith: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    training: {
      type: [
        {
          name: String,
          institution: String,
          time: String,
          Description: String,
        },
      ],
    },
    courses: {
      type: [
        {
          title: String,
          description: String,
        },
      ],
      required: false,
    },
    experiences: {
      type: [
        {
          title: String,
          dateYouEntered: String,
          dateYouLeft: String,
          description: String,
        },
      ],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", ResumeSchema);
