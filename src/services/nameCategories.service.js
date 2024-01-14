const NameCategory = require("../model/nameCategories.model");


async function getAllNamesCategoriesService() {
  const allUsers = await NameCategory.find().exec();
  return allUsers;
};

async function insertNamesCategoriesService(nameFromReq) {
  await NameCategory.insertMany(nameFromReq);
};

async function deleteNamesCategoriesService(id) {
  const infoDeleteOne = await NameCategory.deleteOne({ _id: id });
  return infoDeleteOne;
};

module.exports = {
  getAllNamesCategoriesService,
  insertNamesCategoriesService,
  deleteNamesCategoriesService,
};
