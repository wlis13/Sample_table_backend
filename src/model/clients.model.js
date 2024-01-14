const mongoose = require('mongoose');

const registerClients = mongoose.model("demandClients", {
  demand: String,
  allDemands: Array,
  client: String,
  classification: String,
  update: String,
  historic: Array,
  color: String,
  date: String,
  currency: String,
  valuePending: String,
  inspection: Boolean,
  updateAt: String
});

module.exports = registerClients;
