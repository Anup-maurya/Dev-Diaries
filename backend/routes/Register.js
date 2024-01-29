const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

const salt = bcrypt.genSaltSync(10);

//register
router.post("/", async (req, res) => {
  const { username, name, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      name,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
