const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const secretKey = "anupm97i5tki4lodu2s340wswer";

//create
router.post("/", upload.single("image"), async (req, res) => {
  // console.log(req.file);
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const fileExt = parts[parts.length - 1];
  const newPath = `uploads/${req.file.filename}.${fileExt}`;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, async (er, info) => {
    if (er) throw er;
    const { title, summary, content, author } = req.body;
    const postData = await Post.create({
      title,
      summary,
      content,
      photo: newPath,
      author: info.id,
    });
    res.json(postData);
    // res.json(info);
    // res.json({ title, summary, content });
  });
});

//update
router.put("/", upload.single("image"), async (req, res) => {
  // res.json(req.image);
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const fileExt = parts[parts.length - 1];
    newPath = `uploads/${req.file.filename}.${fileExt}`;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, async (er, info) => {
    if (er) throw er;
    const { id, title, summary, content, author } = req.body;
    const postData = await Post.findById(id);
    const isUser = JSON.stringify(postData.author) === JSON.stringify(info.id);
    //check for author
    // res.json({ isUser, postData, info });
    if (!isUser) {
      return res.status(400).json("Not Authorized");
    }
    await postData.update({
      title,
      summary,
      content,
      photo: newPath ? newPath : postData.photo.image,
    });
    res.json(postData);
  });
});

//get single post
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  // res.json(req.params);
  const post = await Post.findById(id).populate("author", ["username"]);
  res.json(post);
});

module.exports = router;
