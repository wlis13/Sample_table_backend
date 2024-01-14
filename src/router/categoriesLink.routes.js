const { Router } = require("express");
const {
  allCategoryController,
  insertCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryLinks.controller");

const categoriesRouter = Router();

categoriesRouter.get("/all-categories", allCategoryController);
categoriesRouter.post("/insert-category", insertCategoryController);
categoriesRouter.put("/update-category", updateCategoryController);
categoriesRouter.delete("/delete-category", deleteCategoryController);


module.exports = categoriesRouter;
