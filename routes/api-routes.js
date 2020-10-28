const db = require("../models");

module.exports = function(app) {  
  app.get("/api/index.js", (req, res) => {
    db.Items.findAll({}).then((dbItems) => {
      res.json(dbItems);
    });
  });};