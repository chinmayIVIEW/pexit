const router = require("express").Router()
const passport = require('passport')
const db =  require('../models/index.model')
const Profile = db.profile
// const isLoggedIn = require('../auth/auth')
require('../controller/google.auth')


let isLoggedIn = (req,res,next)=>{
  if(req.user){
    next()
  }else{
    res.send("unotherized")
  }
}

// googal sign in
router.get('/google',passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/social/failed' }),
  async function(req, res) {
    let data = await Profile.findOne({ where: { email_id :req.user.emails[0].value }})
    if(data){
      res.redirect('/social/good');
      }else{
        let insert_data = await Profile.create({display_name:req.user.displayName,user_name:req.user.name.givenName,email_id:req.user.emails[0].value})
        if(insert_data){
          res.redirect('/social/good')
        }else{
          res.json({
            message: "something went wrong !!!!"
          })
        }
    }
  });

router.get('/failed',(req,res)=>{
    res.send("you failed to login")
})

router.get('/good',isLoggedIn,async(req,res)=>{
  res.send(`welcome mr. ${req.user.displayName}`)
})

router.get('/logout',(req,res)=>{
  req.session = null
  req.logOut()
  res.redirect('/')
})


module.exports =  { router } 
