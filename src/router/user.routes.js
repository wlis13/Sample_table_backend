const { Router } = require("express");
const {
  getAllUsersController,
  getOneUserController,
  insertUserController,
  deleteOneUserController,
  updateUserController,
} = require("../controllers/user.controller");

const userRoutes = Router();

userRoutes.get("/all-users", getAllUsersController);
userRoutes.get("/one-user", getOneUserController);
userRoutes.post("/insert-user", insertUserController);
userRoutes.put("/update-user", updateUserController);
userRoutes.delete("/delete-one-user/:id", deleteOneUserController);

module.exports = userRoutes;
