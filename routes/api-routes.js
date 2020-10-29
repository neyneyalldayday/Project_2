const db = require("../models");

module.exports = function(app) {
 
  app.get("/api/item", (req, res) => {
    db.Items.findAll({}).then((dbItems) => {
      res.json(dbItems);
    });
  });
}; 
