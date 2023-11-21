const mongoose = require("../db/connection"); // Use require() to import mongoose

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  rating: { type: Number, min: 1, max: 5 }, // Corrected this line
  image: { type: String },
  date: { type: Date, default: Date.now }, // Added default value for date
  userId: { ref: "User", type: mongoose.Schema.Types.ObjectId },
});

const Review = new mongoose.model("Review", reviewSchema);

module.exports = Review;
