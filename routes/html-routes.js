const db = require("../models");
module.exports = (app) => {

  app.get("/", (req, res) => {
    db.Item.findAll({}).then((dbItems) => {
      res.render("index",{Items: dbItems});
    });
  });

  app.post("/api/sell", (req, res) => {
    db.Item.create(req.body).then((dbItems) => {
      res.json(dbItems);
    });
  });

  app.delete("/api/items/:id",(req, res) => {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbItems) =>{
      res.json(dbItems);
    });
  });
};