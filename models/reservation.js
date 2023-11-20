const mongoose = require("../db/connection");

const reservationSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true, // 'required' should be inside the object for 'date'
    },
    time: {
      type: String,
      required: true, // 'required' should be inside the object for 'time'
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
      required: true, // If each reservation must be associated with a place, mark it as required
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // If each reservation must be associated with a user, mark it as required
    },
  },
  { timestamps: true }
); // The timestamps option should be the second argument of the Schema constructor

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
