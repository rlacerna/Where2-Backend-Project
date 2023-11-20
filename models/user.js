const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 'required' should be inside the object for 'name'
  },
  username: {
    type: String,
    required: true, // 'required' should be inside the object for 'username'
  },
  password: {
    type: String,
    required: true, // 'required' should be inside the object for 'password'
  },
  reservations: [
    {
      // Using plural form for consistency and clarity
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
  reviews: [
    {
      // Using plural form for consistency and clarity
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
