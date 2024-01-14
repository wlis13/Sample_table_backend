const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
  category: String
});

const Category = mongoose.model("Category", categoriesSchema);

module.exports = Category;