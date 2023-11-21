const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const session = require("express-session");

router.get("/login", (req, res) => {
  res.json({ message: "login" });
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  let userToLogin = await User.findOne({ username: req.body.username });

  if (userToLogin) {
    console.log(userToLogin);
    bcrypt.compare(req.body.password, userToLogin.password, (err, result) => {
      if (result) {
        req.session.userId = userToLogin._id;
        req.session.username = userToLogin.username;
        
        res.json(userToLogin);
      } else {
        res.status(401).json({ message: "wrong password" });
      }
    });
  }
});

router.get("/signup", (req, res) => {
  res.json({ message: "signup" });
});

router.post("/signup", async (req, res) => {
  if (req.body.name && req.body.password) {
    let plainTextPassword = req.body.password;
    bcrypt.hash(plainTextPassword, 10, async (err, hashedPassword) => {
      req.body.password = hashedPassword;
      let newUser = await User.create(req.body);

      res.json({ message: "Success" });
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
  res.redirect("/");
});

module.exports = router;


