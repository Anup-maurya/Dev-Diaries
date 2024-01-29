const express = require("express");
const jwt = require("jsonwebtoken");
const secretKey = "anupm97i5tki4lodu2s340wswer";
const router = express.Router();

router.get("/", (req, res) => {
  const { token } = req.cookies;
  console.log(req.cookies);
  if (token) {
    jwt.verify(token, secretKey, {}, (er, info) => {
      if (er) throw er;
      // const { username, _id } = await User.findById(info.id);
      res.json(info);
    });
  } else {
    res.json(null);
  }
});

module.exports = router;
