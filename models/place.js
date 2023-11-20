const mongoose = require("../db/connection");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 'required' should be inside the object for 'name'
  },
  location: {
    type: String,
    required: true, // 'required' should be inside the object for 'location'
  },
  description: String,
  image: String,
  reservations: [
    {
      // Typically, this should be plural if it's an array
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
  reviews: [
    {
      // Typically, this should be plural if it's an array
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
