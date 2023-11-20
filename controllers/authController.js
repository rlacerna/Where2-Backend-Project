const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    let userToLogIn = await User.findOne({ username: req.body.username });
    if (userToLogIn) {
        bcrypt.compare(req.body.password, userToLogIn.password, (err, match) => {
            if (result) {
                req.session.userId = userToLogIn._id;
                req.session.name = userToLogIn.name;
                res.redirect('/');
            } else {
                res.send('Incorrect password');
            }
    })
    }
});

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post("/signup", async (req, res) => {
    console.log(req.body);
  
    if (req.body.username && req.body.password) {
      let plainTextPassword = req.body.password;
      bcrypt.hash(plainTextPassword, 10, async (err, hashedPassword) => {
        req.body.password = hashedPassword;
        let newUser = await User.create(req.body);
        res.redirect("/");
      });
    }
  });


module.exports = router;