const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

 
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.user.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect( "/");
      })
      .catch(() => {
        res.render("/signup");
      });
  });

 
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
     
      res.json({});
    } else {
      
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // app.delete("/api/bid_items/:id", (req, res) => {
  //   const chosenItem = req.params.id;
  //   console.log("chosenItem", chosenItem);

  //   db.Item.destroy({
  //     highestBid: req.body.highestBid
  //   },{
  //     where: { id: chosenItem }
  //   })
  //     .then(() => {
  //       res.redirect("/")
  //         .catch(err => console.log(err));
  //     });
      
  // });
};
