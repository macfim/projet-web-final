const config = require("../config/config.js");
const mongoose = require("mongoose");

const db = {};

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

db.mongoose = mongoose;
db.url = config.DB_URL;

db.articles = require("../api/models/article.model.js")(mongoose);

module.exports = db;
