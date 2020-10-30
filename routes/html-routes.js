const db = require("../models");

module.exports = (app) => {

  app.get("/", (req, res) => {
    db.Item.findAll({}).then((dbItems) => {
      res.render("index", { items: dbItems });
    });
  });

  app.get("/sell", (req, res) => {
    res.render("sell", res);
  });

  app.get("/signup", (req, res) => {
    res.render("signup", res);
  });
};