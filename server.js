const session = require("express-session");

const passport = require("./config/passport");
// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// creating s3 instance (to allow uploads)


// Require models for sync
const db = require("./models");

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// middleware to parse/access files we uploaded from our HTML page; also gives us 'req.body'
app.use(fileUpload());

// Static directory
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Sync sequelize models then start Express App
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> listening on port %. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});