const registerClients = require('../model/clients.model');

async function allClientService() {
  const products = await registerClients.find();
  return products;
};

async function getClientByName(name) {
  const getByName = await registerClients.findOne({ client: name });
  return getByName;
}

async function insertClientsService(ClientFromReq) {
  await registerClients.insertMany(ClientFromReq);
};

async function deleteOneClientService(Id) {
  await registerClients.deleteOne({ _id: Id });
  return true;
}

async function updateClientService(id, updatedData) {
  await registerClients.updateOne({ _id: id }, { $set: updatedData });
  return `cliente com o nome: ${updatedData.client} foi atualizado!`;
}

module.exports = {
  allClientService,
  insertClientsService,
  deleteOneClientService,
  updateClientService,
  getClientByName,
};
