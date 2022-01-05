const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
const auth = require('./router/auth.router')
const {router, checkAuthentication}= require('./router/social.auth')
const db = require('./models/index.model')
const cookieparser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const facebookStrategy = require('passport-facebook').Strategy



// middleware
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())

app.use(session({secret : process.env.SECRET_KEY}))
app.use(passport.initialize())
app.use(passport.session())


// home route
app.get('/',(req,res)=>{
    res.render('fblogin')
})

// normal route
app.use('/pexit',auth)



// Social route
app.use('/social',router)


// facebook auth
passport.use(new facebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8000/facebook/callback",
    profileFields: ["id","display_name","name","gender","picture.type(large)","email"]
  },
  function(token, refreshToken, profile, cb){
      console.log(profile);
      return cb(null,profile)
  }
));

app.get('/auth/facebook',passport.authenticate('facebook',{scope: 'email'}))

app.get('/facebook/callback',passport.authenticate('facebook',{
    successRedirect : '/protect',
    failureRedirect : '/failed'
}))

app.get('/failed',(req,res)=>{
    res.send("please authenticate")
})

passport.serializeUser(function(user,cb){
    cb(null,user)
})

passport.deserializeUser(function(id,cb){
   return cb(null,id)
})































// render handelbars files
app.get('/profile',checkAuthentication,(req,res)=>{
    let user = req.user
    res.render('profile',{user})
})

app.get('/protect',(req,res)=>{
    res.render('protected')
})



db.sequelize.sync({force:false})
.then(()=>{
    console.log("table created");
})
.catch(err=>{
    console.log(err);
})


app.listen(port,(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log("server running");
})