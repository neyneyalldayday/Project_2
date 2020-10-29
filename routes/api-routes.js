const db = require("../models");

module.exports = (app) => {
 
  app.get("/api/items", (req, res) => {
    db.Item.findAll({}).then((dbItems) => {
      res.render("index", {Items: dbItems});
    });
  });
}; 

