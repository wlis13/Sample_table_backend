const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
  category: String
});

const Link = mongoose.model("Link", linksSchema);

module.exports = Link;