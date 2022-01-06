require("dotenv").config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db =  require('../models/index.model')
const Profile = db.profile


passport.serializeUser(function(user, done) {
  done(null,user);
  });
  
passport.deserializeUser(async function(user, done) {
  // let data = await Profile.findOne({where:{email_id :Profile.dataValues.email_id}}, function(err, user) {
  //   if(data === null){
  //     done(err, user);
  //   }
  // });
  done(null,user);
});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_APP_CALLBACK_URL
  },
  async function(accessToken, refreshToken, profile, done) {
    let [ user,created ] = await Profile.findOrCreate({
      where : { user_name : profile.displayName + '_' + 'pexit',
                email_id : profile.emails[0].value,
                display_name : profile.displayName }
    })
    if(created){
      done(null,user)
      console.log(user);
      console.log("data inserted");
    }else{
      done("already present",user)
    }
  }
));