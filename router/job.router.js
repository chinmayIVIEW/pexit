const job_router = require("express").Router()
const {create_jobs,view_jobs} = require('../controller/job.controller')
const multer = require('multer');
const path = require("path")
const helpers = require('../helper/helper');



const Storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/job_post_images');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: Storage,fileFilter : helpers.imageFilter}).single('logo');



job_router.post('/create-jobs/:id',upload,create_jobs)
job_router.get('/jobs',view_jobs)




module.exports = job_router