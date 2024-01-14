const {
  insertCategoryService,
  getAllCategorysService,
  updateCategoryService,
  deleteCategoryService,
} = require("../services/categoryLinks.service");

async function allCategoryController(_req, res) {
  const result = await getAllCategorysService();
  res.status(200).json(result);
};

async function insertCategoryController(req, res) {
  try {
    const bodyValues = req.body;
    const insertedLink = await insertCategoryService(bodyValues);
    res.status(201).json(insertedLink);
  } catch (error) {
    res.status(500).json({ message: ` Falha ao inserir Link: ${message.error}` });
  }
};


async function updateCategoryController(req, res) {
  try {
    const valueBody = req.body;
    const { title } = valueBody;
    const getUpdatedLink = await updateCategoryService(title, valueBody);
    res.status(204).json(getUpdatedLink);
  } catch (error) {
    throw new Error(`Erro ao atualizar o Linke${message.error}`);
  }
};

async function deleteCategoryController(req, res) {
  try {
    const { category } = req.body
    const result = await getAllCategorysService();
    const filteredLink = result.find((link) => link.category === category);
    const { _id } = filteredLink;
    const deletedLinks = await deleteCategoryService(_id);
    res.status(204).json({ message: deletedLinks });

  } catch (error) {
    res.status(500).json({ message: ` Falha ao inserir Link: ${error}` });
  }
};

module.exports = {
  allCategoryController,
  insertCategoryController,
  deleteCategoryController,
  updateCategoryController,
};