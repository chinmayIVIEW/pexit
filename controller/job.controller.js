const db =  require('../models/index.model')
const Profile = db.profile
const Jobs = db.jobs


const create_jobs = (req,res)=>{
    if (!req.files)
    return res.status(400).send('Please upload your logo');

    let file = req.files.post_images;
    let img_name=file.name;

    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
        file.mv('public/images/upload_images/'+file.name, function(err) {
            if (err){
                return res.status(500).send(err);
            }
        })
    }

}



module.exports = {create_jobs}
 