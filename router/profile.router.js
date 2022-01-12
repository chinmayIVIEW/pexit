const profile_router = require("express").Router()
const { edit_profile,get_profile,edit_experience,get_experience,edit_education,get_education,edit_honors,get_honors } = require('../controller/edit_profile')


profile_router.post('/edit-profile',edit_profile)
profile_router.get('/get-profile',get_profile)

profile_router.post('/edit-experience',edit_experience)
profile_router.get('/get-experience',get_experience)

profile_router.post('/edit-education',edit_education)
profile_router.get('/get-education',get_education)

profile_router.post('/edit-honors',edit_honors)
profile_router.get('/get-honors',get_honors)




module.exports = profile_router