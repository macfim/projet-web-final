module.exports = (app) => {
  const router = require("express").Router();
  const postController = require("../controllers/post.controller");

  router.post("/posts", postController.create);
  router.get("/posts", postController.findAll);
  router.delete("/posts/:id", postController.delete);
  router.get("/posts/:id", postController.findOne);
  router.put("/posts/:id", postController.update);

  app.use("/api/", router);
};
