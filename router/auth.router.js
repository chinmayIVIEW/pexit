const router = require("express").Router()
const {delete_user,Signup,Signin} = require("../controller/auth.controller")



router.get('/profile/delete-user/:id',delete_user)
router.post('/signup',Signup)
router.post('/signin',Signin)


module.exports = router