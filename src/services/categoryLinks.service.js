const Category = require("../model/categoryLinks.model");


async function getAllCategorysService() {
  const allLinks = await Category.find().exec();
  return allLinks;
};

async function insertCategoryService(LinkFromReq) {
  const getInsert = await Category.insertMany(LinkFromReq);
  return getInsert;
};

async function updateCategoryService(title, newLink) {
  const updateInfo = await Category.updateOne({ title: title }, { $set: newLink });
  return updateInfo;
};

async function deleteCategoryService(id) {
  const infoDeleteOne = await Category.deleteOne({ _id: id });
  return infoDeleteOne;
};

module.exports = {
  getAllCategorysService,
  insertCategoryService,
  deleteCategoryService,
  updateCategoryService
};