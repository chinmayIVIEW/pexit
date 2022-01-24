const job_router = require("express").Router()
const {create_jobs} = require('../controller/job.controller')


job_router.post('/jobs',create_jobs)




module.exports = job_router