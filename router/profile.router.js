const profile_router = require("express").Router()
const { edit_profile,get_profile,edit_experience,get_experience,edit_education,get_education } = require('../controller/edit_profile')


profile_router.post('/edit-profile',edit_profile)
profile_router.get('/get-profile',get_profile)

profile_router.post('/edit-experience',edit_experience)
profile_router.get('/get-experience',get_experience)

profile_router.post('/edit-education',edit_education)
profile_router.get('/get-education',get_education)






module.exports = profile_router