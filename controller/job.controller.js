const db =  require('../models/index.model')
const Profile = db.profile
const Jobs = db.jobs
const helpers = require('../helper/helper');
const multer = require('multer');
const path = require("path")


const Storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/job_post_images');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


const create_jobs = async (req,res)=>{
    let profile = await Profile.findOne({
        where : {
            profile_id : req.params.id
        }
    })
    if(profile){
        let upload = multer({ storage: Storage }).array('docs');

        upload(req, res, async function(err) {
            console.log(req.files);
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            // let job_data = await Jobs.create({logo:req.file.filename})


            // Display uploaded image for user validation
            // res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
            res.send("file uploaded")
        })
    }
}

const view_jobs = async (req, res) => {
    let jobs_data = await Jobs.findAll()
    if(jobs_data){
        res.status(200).json({jobs_data})
    }else{
        res.status(404)
    }
}




module.exports = {create_jobs,view_jobs}