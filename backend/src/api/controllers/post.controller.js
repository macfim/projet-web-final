const slugify = require("slugify");
const db = require("../../database/db.config");
const Post = db.posts;
//create a new post
exports.create = (req, res) => {
  //récupération des données
  const { title, content, author, slug, tags } = req.body;
  if (!title || !content || !author || !slug) {
    return res.status(400).send({
      message: "content can not be empty",
    });
  }
  const slugy = slugify(slug, "-");
  const newPost = new Post({
    title: title,
    content: content,
    author: author,
    slug: slugy,
    tags: tags,
  });
  newPost
    .save(newPost)
    .then((data) => {
      res.status(200).send({
        message: "successufully created post",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findAll = (req, res) => {
  Post.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "id can not be empty",
    });
  }

  Post.findByIdAndDelete(id).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Post not found with id " + id,
      });
    }

    res.send({
      message: "Post was deleted successfully!",
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "id can not be empty",
    });
  }

  Post.findById(id).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Post not found with id " + id,
      });
    }

    res.send(data);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  if (!id || !title || !content) {
    return res.status(400).send({
      message: "id, title and content can not be empty",
    });
  }

  Post.findByIdAndUpdate(
    id,
    { title, content },
    { useFindAndModify: false }
  ).then((data) => {
    if (!data) {
      return res.status(404).send({
        message: "Post not found with id " + id,
      });
    }

    res.send({
      message: "Post was updated successfully.",
    });
  });
};
