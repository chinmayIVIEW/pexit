require("dotenv").config()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;



passport.serializeUser(function(user, done) {
    done(null,user);
    });
    
passport.deserializeUser(function(user, done) {
    done(null,user);
    });
  


passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8000/social/facebook/callback",
    profileFields: ['displayName','name','email',]
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile)
  }
));