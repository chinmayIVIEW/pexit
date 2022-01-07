const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8000
// const router = require('./router/social.auth')
const basic_router = require('./router/auth.router')
const cookieparser = require('cookie-parser')
const db = require('./models/index.model')


// middleware
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieparser())


// normal route
app.use('/pexit',basic_router)
app.use('/',(req,res)=>{
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