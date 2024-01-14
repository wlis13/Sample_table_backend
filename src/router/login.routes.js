const { Router } = require("express");
const { loginController } = require("../controllers/login.controller");

const loginRoutes = Router();

loginRoutes.post("/login-user", loginController);

module.exports = loginRoutes;
