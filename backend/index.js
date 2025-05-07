const express = require("express");
const database = require("./src/database/db.config.js");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

database.mongoose
  .connect(database.url, {})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});

require("./src/api/routes/routes.js")(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}.`);
});
