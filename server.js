const express = require("express");
const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));





db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> listening on port %. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});