const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
passport.use(new LocalStrategy({
  usernameField: "email"
},
((email,password, done) => {
  db.user.findOne({
    where: {
      email: email
    }
  }).then((dbUser)=> {
    console.log("dbUser", dbUser);
    if(!dbUser) {
      console.log("!dbUser");
      return done(null, false, {
        message: "email incorrect daddy"
      });
    }
    else if (!dbUser.validPassword(password)) {
      console.log("!dbUser.valid password");
      return done(null, false, {
        message: "Incorrect password daddy."
      });
    }
    console.log("all good");
    return done(null, dbUser);
  }).catch(err => console.log("err",err));
})
));
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
module.exports = passport;
