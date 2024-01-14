const {
  allClientService,
  insertClientsService,
  deleteOneClientService,
  updateClientService,
  getClientByName,
} = require('../services/client.service');

async function allClientController(_req, res) {
  const result = await allClientService();
  res.status(200).json(result);
};

async function insertClientsController(req, res) {
  try {
    const result = await allClientService();
    const bodyValues = req.body;
    const filteredClient = result.find((cli) => cli.client === bodyValues.client);
    if (filteredClient) {
      const indexToRemove = filteredClient.historic.
        findIndex((item) => item.update === bodyValues.update);

      if (indexToRemove !== -1) {
        filteredClient.historic.splice(indexToRemove, 1);
      }
      const { _id } = filteredClient
      const { update, updateAt, color, demand } = bodyValues;
      const objectHistoric = {
        update,
        updateAt,
        color,
        demand
      }
      filteredClient.historic.push(objectHistoric);
      const verifyExist = filteredClient.allDemands.find((cli) => cli === demand);
      if (!verifyExist) {
        filteredClient.allDemands.push(demand);
      }
      const { historic, allDemands } = filteredClient;
      const response = await updateClientService(_id, {
        ...bodyValues, historic, allDemands, date: filteredClient.date
      });
      res.status(204).json(response);
    } else {
      const { update, date, color, allDemands, demand } = bodyValues;
      allDemands.push(demand);
      const objectHistoric = {
        update,
        date,
        color,
        demand
      }
      bodyValues.historic.push(objectHistoric);
      await insertClientsService(bodyValues);
      res.status(201).json({ message: "cliente inserido com sucesso!" });
    }
  } catch (error) {
    res.status(500).json({ message: ` Falha ao inserir cliente ${message.error}` });
  }
};

async function getClientByNameController(req, res) {
  const { client } = req.body
  const result = await getClientByName(client);
  res.status(200).json(result);
};

async function deleteOneClientController(req, res) {
  try {
    const { name } = req.body;
    const getByName = await getClientByName(name);
    const { _id } = getByName;
    const deletedOneClient = await deleteOneClientService(_id);
    res.status(204).json(deletedOneClient);
  } catch (error) {
    res.status(500).json({ message: `Não foi possível deletar o cliente ${error}` })
  }
};

async function updateClientController(req, res) {
  try {
    const { client } = req.body;
    const valueBody = req.body;
    const getByName = await getClientByName(client);
    const { _id } = getByName;
    const getUpdatedClient = await updateClientService(_id, valueBody);
    res.status(204).json(getUpdatedClient);
  } catch (error) {
    throw new Error(`Erro ao atualizar o cliente${message.error}`);
  }
};

module.exports = {
  allClientController,
  getClientByNameController,
  insertClientsController,
  deleteOneClientController,
  updateClientController,
};