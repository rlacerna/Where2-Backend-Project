require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const session = require("express-session");
const methodOverride = require("method-override");

const authRoutes = require("./controllers/authController");
const placeRoutes = require("./controllers/placeController");
const reservationRoutes = require("./controllers/reservationController");
const reviewRoutes = require("./controllers/reviewController");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(session({ secret: "where2", cookie: { maxAge: 6000000 } }));

app.use(express.json());

app.use("/user", authRoutes);
app.use("/place", placeRoutes);
app.use("/reservation", reservationRoutes);
app.use("/review", reviewRoutes);



app.listen(PORT, () => console.log("Where2 is listening on port:", PORT));