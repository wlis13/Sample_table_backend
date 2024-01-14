const {
  insertNamesCategoriesService,
  getAllNamesCategoriesService,
  deleteNamesCategoriesService,
} = require("../services/nameCategories.service");

async function getAllNameCategoriesController(_req, res) {
  try {
    const getAllNames = await getAllNamesCategoriesService();
    res.status(200).json(getAllNames);
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` })
  }
};

async function insertNameCategoriesController(req, res) {
  try {
    const { name } = req.body;
    const getAllNames = await getAllNamesCategoriesService();
    const verifyExistNameCategory = getAllNames.find((item) => item.name === name);
    if (!verifyExistNameCategory) {
      const addNameCategories = await insertNamesCategoriesService(req.body);
      res.status(201).json(addNameCategories);
    } else {
      res.status(401).json({ message: "Nome já existe." })
    }
  } catch (error) {
    res.status(500).json({ message: `Erro no servidor: ${error}` });
  }
};

async function deleteNameCategoriesController(req, res) {
  try {
    const { name } = req.body
    const getAllNames = await getAllNamesCategoriesService();
    const filteredLink = getAllNames.find((link) => link.name === name);
    const { _id } = filteredLink;
    const deletedLinks = await deleteNamesCategoriesService(_id);
    res.status(204).json({ message: deletedLinks });
  } catch (error) {
    res.status(500).json({ message: ` Falha ao inserir Link: ${error}` });
  }
};

module.exports = {
  getAllNameCategoriesController,
  insertNameCategoriesController,
  deleteNameCategoriesController,
};
