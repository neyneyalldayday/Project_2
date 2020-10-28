// Dependencies
const express = require("express");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Require models for sync
const db = require("./models");

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Sync sequelize models then start Express App
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> listening on port %. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});