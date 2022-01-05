const router = require("express").Router()
const passport = require('passport')
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
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/social/good');
  });

router.get('/failed',(req,res)=>{
    res.send("you failed to login")
})
router.get('/good',isLoggedIn,(req,res)=>{
    res.send(`welcome mr. ${req.user.displayName}`)
})

router.get('/logout',(req,res)=>{
  req.session = null
  req.logOut()
  res.redirect('/')
})


module.exports =  router 
