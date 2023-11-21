const express = require("express");
const app = express();
const morgan = require("morgan");
const authRoutes = require("./controllers/authController");
const reviewController = require("./controllers/reviewController")

const session = require("express-session");
app.use(
  session({ secret: "somestring", cookie: { maxAge: 7400 } })
);

const cors = require("cors");
require("dotenv").config();

app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use(authRoutes);

app.use((req, res, next) => {
  if (!req.session.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
});

app.use("/reviews", reviewController)

app.get("/", (req, res) => {
  res.json({ message: "home" });
});``


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("listening on", PORT));