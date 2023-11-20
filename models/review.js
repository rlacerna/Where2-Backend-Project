const mongoose = require("../db/connection"); // Use require() to import mongoose

const reviewSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    rating: {
      type: Number,
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
