const Link = require("../model/linksLalef.model");

async function getAllLinksService() {
  const allLinks = await Link.find().exec();
  return allLinks;
};

async function insertLinkService(LinkFromReq) {
  const getInsert = await Link.insertMany(LinkFromReq);
  return getInsert;
}

async function updateLinkService(title, newLink) {
  const updateInfo = await Link.updateOne({ title: title }, { $set: newLink });
  return updateInfo;
}

async function deleteLinkService(id) {
  const infoDeleteOne = await Link.deleteOne({ _id: id });
  return infoDeleteOne;
}

module.exports = {
  getAllLinksService,
  insertLinkService,
  deleteLinkService,
  updateLinkService
};