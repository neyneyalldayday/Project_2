const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../publicsignup.html"));
  });
  app.get("/login" ,(req, res) => {
    if (req, res) {
      res.redirect("/members");
    }
  });
  app.get("/members" , isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};