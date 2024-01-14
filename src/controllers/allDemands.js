// const registerClients = require('../model/clients.model');

// async function deleteDemandById(req, res) {
//   try {
//     const { id } = req.body
//     const client = await registerClients.findById(id);
//     if (!client) {
//       console.log('Cliente não encontrado.');
//       return;
//     }

//     client.allDemands = [client.allDemands[0]];

//     await client.save();
//     res.status(204).json(client.allDemands);
//   } catch (error) {
//     console.error('Erro ao apagar allHistoric:', error);
//   }
// }

// module.exports = {
//   deleteDemandById,
// };
