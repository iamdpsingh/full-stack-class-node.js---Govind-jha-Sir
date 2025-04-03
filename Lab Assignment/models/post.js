const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: String,
    tag: String
});

module.exports = mongoose.model("Post", postSchema);
