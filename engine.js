const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
// const auth = require('./router/auth.router')
const router = require('./router/social.auth')
const passport = require('passport')
const session = require('express-session')
const db = require('./models/index.model')




// middleware
// app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(cookieparser())

app.use(session({
    secret : process.env.SECRET_KEY,
    resave : false,
    saveUninitialized:false
 })
)
app.use(passport.initialize())
app.use(passport.session())


// home route

// normal route
// app.use('/pexit',auth)



// Social route
app.use('/social',router)
app.get('/',(req,res)=>{
    req.session.isAuth = true
    console.log(req.session);
    console.log(req.session.id);
    res.send("i am home ")
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