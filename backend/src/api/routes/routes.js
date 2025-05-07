module.exports = (app) => {
  const router = require("express").Router();
  const articleController = require("../controllers/article.controller");

  // Article routes
  router.post("/articles", articleController.create);
  router.get("/articles", articleController.findAll);
  router.get("/articles/:id", articleController.findOne);
  router.put("/articles/:id", articleController.update);
  router.delete("/articles/:id", articleController.delete);

  app.use("/api/", router);
};
