const basic_router = require("express").Router()
const {delete_user,Signup,Signin,Logout} = require("../controller/auth.controller")
const { checkToken } = require('../auth/auth')


basic_router.get('/profile/delete-user/:id',checkToken,delete_user)
basic_router.post('/signup',Signup)
basic_router.post('/signin',Signin)
basic_router.post('/logout',checkToken,Logout)




module.exports = basic_router