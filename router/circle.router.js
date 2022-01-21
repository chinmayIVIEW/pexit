const circle_router = require("express").Router()
const {connect,my_connection} = require("../controller/mycircle.controller")




circle_router.post('/my-circle/connect/:user',connect)
circle_router.get('/my-circle/my_connection/:profile_id',my_connection)





module.exports = circle_router