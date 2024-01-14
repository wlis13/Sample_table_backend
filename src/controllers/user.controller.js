const {
  getAllUsersService,
  getOneUserService,
  insertUserService,
  deleteOneUserService,
  deleteAllUserService,
  updateUserService,
} = require("../services/user.service")

async function getAllUsersController(_req, res) {
  try {
    const getAllUsers = await getAllUsersService();
    res.status(200).json(getAllUsers);
  } catch (error) {
    res.status(500).json({ message: `Não foi possível encontrar usuários: ${error}` })
  }
};

async function getOneUserController(req, res) {
  try {
    const { _id } = req.params;
    const getOneuser = await getOneUserService(_id);
    res.status(200).json(getOneuser);
  } catch (error) {
    res.status(500).json({ message: `Usuário não encontrado: ${error}` })
  }
};

async function insertUserController(req, res) {
  try {
    const getValueBody = req.body;
    const { name } = getValueBody
    const getAllUsers = await getAllUsersService();
    const findUser = getAllUsers.find((user) => user.name === name);
    if (findUser) {
      res.status(203).json({ message: "Usuário já existe!" });
    } else {
      await insertUserService(getValueBody);
      const messageRegister = "Usuário adicionado com sucesso!"
      const ok = true;
      const objectAddUser = {
        ok,
        messageRegister
      }
      res.status(201).json(objectAddUser);
    }
  } catch (error) {
    const messageRegister = `Não foi possível inserir o usuário: ${error}`
    const ok = false;
    const objectAddUser = {
      ok,
      messageRegister
    }
    res.status(500).json(objectAddUser)
  }
};

async function updateUserController(req, res) {
  try {
    const infoUser = req.body;
    const { name } = infoUser
    await updateUserService(name, infoUser);
    res.status(201).json({ message: `Usuário: ${infoUser.name} atualizado com sucesso!` });
  } catch (error) {
    res.status(500).json({ message: `Não foi possível atualizar usuário: ${error}` });
  }
}

async function deleteOneUserController(req, res) {
  try {
    const { id } = req.params;
    const getInfoDelete = await deleteOneUserService(id);
    res.status(204).json(getInfoDelete);
  } catch (error) {
    res.status(500).json({ message: `Não foi possível deletar esse usuário: ${error}` });
  }
};

async function deleteAllUserController(_req, res) {
  try {
    await deleteAllUserService();
    res.status(205).json({ message: "Todos os usuários forma deletados!" });
  } catch (error) {
    res.status(500).json({ message: `Não foi possível deletar todos os usuários: ${error}` });
  }
}

module.exports = {
  getAllUsersController,
  getOneUserController,
  insertUserController,
  deleteOneUserController,
  deleteAllUserController,
  updateUserController
};
