const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secretKey = "anupm97i5tki4lodu2s340wswer";

//login
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const userDocument = await User.findOne({ username });

  const passwordMatch = bcrypt.compareSync(password, userDocument.password);
  if (passwordMatch) {
    jwt.sign(
      { username: userDocument.username, id: userDocument._id },
      secretKey,
      {},
      (er, token) => {
        if (er) throw er;
        res.cookie("token", token).json({ id: userDocument._id, username });
      }
    );
  } else {
    res.status(400).json("Wrong Credentials!");
  }
});

module.exports = router;
