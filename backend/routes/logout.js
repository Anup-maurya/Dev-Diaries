const express = require("express");
const router = express.Router();

//logout user
router.post("/", (req, res) => {
  // res.clearCookie("token");
  res.cookie("token", "");
  res.send("cookie cleared");
});

module.exports = router;
