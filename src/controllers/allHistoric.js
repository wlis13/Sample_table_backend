// const registerClients = require('../model/clients.model');

// async function deleteAllHistoricById(req, res) {
//   try {
//     const { id } = req.body
//     const client = await registerClients.findById(id);
//     if (!client) {
//       console.log('Cliente não encontrado.');
//       return;
//     }

//     client.historic = [];

//     await client.save();
//     res.status(204).json('allHistoric apagado com sucesso.');
//   } catch (error) {
//     console.error('Erro ao apagar allHistoric:', error);
//   }
// }

// module.exports = deleteAllHistoricById;
