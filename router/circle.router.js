const circle_router = require("express").Router()
const {connect,my_connection,pending_connection_count,pending_connection,connection_state} = require("../controller/mycircle.controller")




circle_router.post('/my-circle/connect/:user',connect)
circle_router.get('/my-circle/my_connection/:profile_id',my_connection)
circle_router.get('/my-circle/pending-connection-count/:id',pending_connection_count)
circle_router.get('/my-circle/pending-connection/:id',pending_connection)
circle_router.get('/my-circle/connection-state/:id',connection_state)







module.exports = circle_router