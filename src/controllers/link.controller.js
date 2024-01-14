const {
  getAllLinksService,
  insertLinkService,
  deleteLinkService,
  updateLinkService,
} = require("../services/link.service");


async function allLinkController(_req, res) {
  const result = await getAllLinksService();
  res.status(200).json(result);
};

async function insertLinkController(req, res) {
  try {
    const bodyValues = req.body;
    const insertedLink = await insertLinkService(bodyValues);
    res.status(201).json(insertedLink);
  } catch (error) {
    res.status(500).json({ message: ` Falha ao inserir Link: ${message.error}` });
  }
};


async function updateLinkController(req, res) {
  try {
    const valueBody = req.body;
    const { title } = valueBody;
    const getUpdatedLink = await updateLinkService(title, valueBody);
    res.status(204).json(getUpdatedLink);
  } catch (error) {
    throw new Error(`Erro ao atualizar o Linke${message.error}`);
  }
};

async function deleteLinksController(req, res) {
  try {
    const { title } = req.body
    const result = await getAllLinksService();
    const filteredLink = result.find((link) => link.title === title);
    const { _id } = filteredLink;
    await deleteLinkService(_id);
    res.status(204).json("Link deletado com sucesso!");
  } catch (error) {
    res.status(500).json({ message: ` Falha ao inserir Link: ${error}` });
  }
};

module.exports = {
  allLinkController,
  insertLinkController,
  deleteLinksController,
  updateLinkController,
};