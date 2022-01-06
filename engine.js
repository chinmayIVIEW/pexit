const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
// const router = require('./router/social.auth')
const basic_router = require('./router/auth.router')
const passport = require('passport')
const Sequelize = require('sequelize')
const cookieparser = require('cookie-parser')
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const {db,sequelize} = require('./models/index.model')
const db_cred = new Sequelize(sequelize.config.database,sequelize.config.username,sequelize.config.password,{
    dialect:"mysql",
    logging:true
})


let sessionStore = new SequelizeStore({
    db: db_cred
})

// middleware
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())

app.use(session({
    secret : process.env.SECRET_KEY,
    resave : false,
    saveUninitialized:false,
    cookie : {
        expires : 600000
    },
    store : sessionStore
 })
)
app.use(passport.initialize())
app.use(passport.session())



// normal route
app.use('/pexit',basic_router)
app.use('/',(req,res)=>{
    req.session.isAuth = true
    res.send("you are in home page")
})

// Social route
// app.use('/social',router)
// app.get('/',(req,res)=>{
//     req.session.isAuth = true
//     // console.log(req.session);
//     console.log(req.session.id);
//     res.send("i am home ")
// })

sessionStore.sync({force:false})
.then(()=>{
    console.log("session table also created");
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