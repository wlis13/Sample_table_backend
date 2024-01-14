const { loginUser } = require("../services/login.service");


async function loginController(req, res) {
  try {
    const userFromReq = req.body;
    const userWithToken = await loginUser(userFromReq);
    return res.status(200).json(userWithToken);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` })
  }
}

module.exports = {
  loginController,
};