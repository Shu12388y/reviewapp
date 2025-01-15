import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } 
);

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);

export default Review;