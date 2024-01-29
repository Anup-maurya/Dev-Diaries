const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = 8000;

//route handlers
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/Register");
const postRoute = require("./routes/post");
const profileRoute = require("./routes/profile");
const postsRoute = require("./routes/posts");
const logoutRoute = require("./routes/logout");

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

//remove cors error
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

mongoose.set("strictQuery", true);
//connect to db
mongoose.connect(process.env.MONGO_URL);

//configuring routes
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/post", postRoute);
app.use("/profile", profileRoute);
app.use("/posts", postsRoute);
app.use("/logout", logoutRoute);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => console.log(`server started on port ${port}`));
