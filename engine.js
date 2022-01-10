const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
const {router} = require('./router/social.signin')
const basic_router = require('./router/auth.router')
const cookieparser = require('cookie-parser')
const db = require('./models/index.model')
var cookieSession = require('cookie-session')
const passport = require('passport')



// middleware
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())

app.use(cookieSession({ 
    name : "social-secret",
    keys: [process.env.SECRET_KEY],
    maxAge: 24 * 60 * 60 * 1000
  }));
app.use(passport.initialize());
app.use(passport.session());


// normal route
app.use('/pexit',basic_router)



// Social route
app.use('/social',router)



app.use('/',(req,res)=>{
    res.send("you are in home page")
})


db.sequelize.sync({force:false})
.then(()=>{
    console.log("table created");
})
.catch(err=>{
    console.log(err);
})


app.listen(port,()=>{
    console.log("server running");
})