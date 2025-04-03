const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Post = require("./models/post");

const app = express();
const PORT = 3300;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


mongoose.connect("mongodb://127.0.0.1:27017/lab-assignment-post", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));



  app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("index", { posts });
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body; 
    if (!title || !content) {
      return res.status(400).send("Title and Content are required");
    }
    await Post.create({ title, content });
    res.redirect("/posts");
  } catch (error) {
    res.status(500).send("Error creating post");
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("show", { post });
  } catch (error) {
    res.status(500).send("Error fetching post");
  }
});

app.get("/posts/:id/edit", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");
    res.render("edit", { post });
  } catch (error) {
    res.status(500).send("Error loading edit form");
  }
});

app.put("/posts/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send("Title and Content are required");
    }
    await Post.findByIdAndUpdate(req.params.id, { title, content });
    res.redirect("/posts");
  } catch (error) {
    res.status(500).send("Error updating post");
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/posts");
  } catch (error) {
    res.status(500).send("Error deleting post");
  }
});

app.listen(PORT, () => {
  console.log("Server running at port", PORT);
});
