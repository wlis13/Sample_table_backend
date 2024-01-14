const { Router } = require('express');
const {
  allClientController,
  insertClientsController,
  deleteOneClientController,
  updateClientController,
  getClientByNameController,
} = require('../controllers/clients.controller');
// const deleteAllHistoricById = require('../controllers/allHistoric');
// const { deleteDemandById } = require('../controllers/allDemands');

const clientRoutes = Router();

clientRoutes.get("/", allClientController);
clientRoutes.post("/insert/client", insertClientsController);
clientRoutes.post("/get-by-name", getClientByNameController);
clientRoutes.put("/updete-by-id", updateClientController);
clientRoutes.delete("/delete/one-client", deleteOneClientController);
// clientRoutes.put("/delete-test", deleteAllHistoricById);  // uso restrito
// clientRoutes.put("/delete-all-demands", deleteDemandById); // uso restrito

module.exports = {
  clientRoutes,
}