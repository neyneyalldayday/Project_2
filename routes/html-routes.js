const db = require("../models");
//const Items = require("../models/Items");
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

  app.post("/sell", (req, res) => {
    const { category, itemName, replica, descript, highestBid } = req.body;
  
    db.Item.create({
      category,
      itemName,
      replica, 
      descript,
      highestBid
    })
      .then(() => res.redirect("/"))
      .catch(err => console.log(err));
  });

  app.get("/search", (req, res) => {
    const { itemName, replica } = req.body;
  
    db.Item.findAll({
      itemName,
      replica, 
    })
      .then(() => res.redirect("/"))
      .catch(err => console.log(err));
  });
};

  
