const db = require("../models");

module.exports = (app) => {

  // app.get("/", (req, res) => {
  //   res.render("index", res);
  // });

  app.get("/", (req, res) => {
    db.Item.findAll({}).then((dbItems) => {
      console.log(dbItems);
      
      res.render("index", {items: dbItems});
    });
  });

  app.get("/sell", (req, res) => {
    res.render("sell", res);
  });

  app.get("/signup", (req, res) => {
    res.render("signup", res);
  });
};