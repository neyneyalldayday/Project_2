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

  app.get("/search", (req, res) => {
    console.log(req.query.itemname);

    const itemName = req.query.itemname;

    db.Item.findAll({
      where: { itemName: itemName}
    })
      .then((dbItems) => {
        res.render("searchrender",{items: dbItems});
      })
      .catch(err => console.log(err));

    
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
  
};

  
