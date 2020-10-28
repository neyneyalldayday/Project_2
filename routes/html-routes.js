
module.exports = (app) => {

  app.get("/", function (req, res) {
    res.render("index", res);
  })

  app.get("/sell", function (req, res) {
    res.render("sell", res);
  })

  app.get("/signup", function (req, res) {
    res.render("signup", res);
  });
};