const post_router = require("express").Router()
const {add_post,all_posts,user_post} = require("../controller/myposts.controller")



post_router.post('/add-posts',add_post)
post_router.get('/all-posts',all_posts)
post_router.get('/user-posts',user_post)





module.exports = post_router