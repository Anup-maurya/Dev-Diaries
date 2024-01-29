const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 })
    .limit(20);
  res.json(posts);
});

module.exports = router;
