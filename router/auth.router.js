const auth_router = require("express").Router()
const {delete_user,Signup,Signin,Logout} = require("../controller/auth.controller")
const { checkToken } = require('../auth/auth')
const { isLoggedIn } = require('./social.router')

auth_router.get('/profile/delete-user/:id',checkToken,delete_user)
auth_router.post('/signup',Signup)
auth_router.post('/signin',Signin)



auth_router.post('/logout',checkToken,Logout)




module.exports = auth_router  