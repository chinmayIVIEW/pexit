require("dotenv").config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db =  require('../models/index.model')
const Profile = db.profile


passport.serializeUser(function(user, done) {
  done(null,user);
  });
  
passport.deserializeUser(function(user, done) {
  done(null,user)
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_APP_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile.emails[0].value);
    return done(null, profile);
    // Profile.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));