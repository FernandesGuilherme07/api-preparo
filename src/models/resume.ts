import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    address: {
      type: {
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
      type: Date,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    Training: {
      type: [
        {
          name: String,
          institution: String,
          time: String,
          Descriptin: String,
        },
      ],
    },
    Courses: {
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
          dateYouEntered: Date,
          dateYouLeft: Date,
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
