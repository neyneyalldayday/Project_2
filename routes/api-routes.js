const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log("Current user " + req.user.email);
    res.json(req.user);
  });

  // eslint-disable-next-line no-empty-function

  app.post("/api/signup", (req, res) => {
    db.user.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect("/");
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
};
