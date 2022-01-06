const basic_router = require("express").Router()
const {delete_user,Signup,Signin} = require("../controller/auth.controller")



basic_router.get('/profile/delete-user/:id',delete_user)
basic_router.post('/signup',Signup)
basic_router.post('/signin',Signin)



module.exports = basic_router