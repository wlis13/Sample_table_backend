const User = require('../model/user.model');
const { comparePasswords } = require('../util/crypto');
const { generateToken } = require('../util/jwt');

async function loginUser(userFromReq) {
  const userFromDB = await User.findOne({ name: userFromReq.name });
  if (!userFromDB) {
    return "Usuário não existe!";
  }
  const passwordIsValid = comparePasswords(userFromReq.password, userFromDB.password);
  if (!passwordIsValid) {
    return "password inválido!"
  }
  const token = await generateToken(userFromDB);
  const user = userFromDB;
  delete user.password;
  return { ...user, token };
}

module.exports = {
  loginUser,
};