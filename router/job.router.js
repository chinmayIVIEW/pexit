const job_router = require("express").Router()
const {create_jobs,view_jobs} = require('../controller/job.controller')


job_router.post('/create-jobs/:id',create_jobs)
job_router.get('/jobs',view_jobs)




module.exports = job_router