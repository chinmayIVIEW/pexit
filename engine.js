const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
const path = require("path")
const {router} = require('./router/social.router')
const auth_router = require('./router/auth.router')
const profile_route = require('./router/profile.router')
const post_route = require('./router/post.router')
const circle_route = require('./router/circle.router')
const job_route = require('./router/job.router')
const cookieparser = require('cookie-parser')
const db = require('./models/index.model')
const cookieSession = require('cookie-session')
const passport = require('passport')
const fileupload = require("express-fileupload")
 

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
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileupload())

// normal route
app.use('/pexit',auth_router)


// Social route
app.use('/social',router)


// usual route
app.use('/pexit/profile',profile_route)
app.use('/pexit/profile',post_route)
app.use('/pexit/profile',circle_route)
app.use('/pexit',job_route)



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