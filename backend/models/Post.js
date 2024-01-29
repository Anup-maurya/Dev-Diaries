const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    photo: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
