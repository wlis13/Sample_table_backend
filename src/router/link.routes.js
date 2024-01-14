const { Router } = require("express");
const { allLinkController, insertLinkController, updateLinkController, deleteLinksController } = require("../controllers/link.controller");

const linkRouter = Router();

linkRouter.get("/all-links", allLinkController);
linkRouter.post("/insert-link", insertLinkController);
linkRouter.put("/update-link", updateLinkController);
linkRouter.delete("/delete-link", deleteLinksController);

module.exports = linkRouter;
