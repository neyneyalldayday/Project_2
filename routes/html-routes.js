re
module.exports = (app) => {

  app.get("/", (req, res) => {
    res.render("index", res);
  });

  app.get("/sell", (req, res) => {
    res.render("sell", res);
  });

  app.get("/signup", (req, res) => {
    res.render("signup", res);
  });
};