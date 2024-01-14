const mongoose = require("mongoose");

const NameCategoriesSchema = new mongoose.Schema({
  name: String,
});

const NameCategory = mongoose.model("NameCategory", NameCategoriesSchema);

module.exports = NameCategory;
