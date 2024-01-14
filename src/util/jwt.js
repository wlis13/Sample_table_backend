const jwt = require('jsonwebtoken');

const fs = require('fs');

const secret = 'secret key';

async function generateToken(payload) {
  const token = jwt.sign({ ...payload }, secret, { algorithm: 'HS256' });
  return token;
}

module.exports = {
  generateToken,
};