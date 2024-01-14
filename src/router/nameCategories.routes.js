const { Router } = require("express");
const {
  getAllNameCategoriesController,
  insertNameCategoriesController,
  deleteNameCategoriesController,
} = require("../controllers/nameCategories.controller");

const namesCategoriesRouter = Router();

namesCategoriesRouter.get("/all-names-categories", getAllNameCategoriesController);
namesCategoriesRouter.post("/insert-names-categories", insertNameCategoriesController);
namesCategoriesRouter.delete("/delete-name-categories", deleteNameCategoriesController);

module.exports = namesCategoriesRouter;
