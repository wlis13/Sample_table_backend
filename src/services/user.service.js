const User = require("../model/user.model");
const { hashPassword } = require("../util/crypto");

async function getAllUsersService() {
  const allUsers = await User.find().exec();
  return allUsers;
};

async function getOneUserService(id) {
  const oneClient = await User.findOne({ _id: id });
  return oneClient
};

async function insertUserService(userFromReq) {
  const passwordHash = hashPassword(userFromReq.password);
  await User.insertMany({ ...userFromReq, password: passwordHash });
}

async function updateUserService(name, newUser) {
  const updateInfo = await User.updateOne({ name: name }, { $set: newUser });
  return updateInfo;
}

async function deleteOneUserService(id) {
  const infoDeleteOne = await User.deleteOne({ _id: id });
  return infoDeleteOne;
}

async function deleteAllUserService() {
  const infoDeleteAll = await User.deleteMany();
  return infoDeleteAll;
}

module.exports = {
  getAllUsersService,
  getOneUserService,
  insertUserService,
  deleteOneUserService,
  deleteAllUserService,
  updateUserService
};
