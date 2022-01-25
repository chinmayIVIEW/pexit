const db =  require('../models/index.model')
const Profile = db.profile
const Jobs = db.jobs


const create_jobs = async (req,res)=>{
    if (!req.files)
    return res.status(400).send('Please upload your logo');

    let file = req.files.job_images;
    let img_name=file.name;

    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
        file.mv('public/images/job_post_images/'+file.name, async function(err) {
            if (err)
            return res.status(500).send(err);
            let profile = await Profile.findOne({
                where : {
                    profile_id : req.params.id
                }
            })
            if(profile){
                let job_data = await Jobs.create({logo:img_name,job_title:req.body.job_title,company:req.body.company,country:req.body.country,state:req.body.state,city:req.body.city,
                    postal_code:req.body.postal_code,job_function:req.body.job_function,employee_type:req.body.employee_type,company_industry:req.body.company_industry,
                    seniority_level:req.body.seniority_level,job_description:req.body.job_description,company_description: req.body.company_description,mode_of_apply:req.body.mode_of_apply,profile_id:profile.profile_id})
                if(job_data){
                    res.status(200).json({
                        message:"job created successfully !!!"
                    })
                }else{
                    res.status(404).json({message:"Something went wrong !!!"})
                }
            }else{
                res.status(500).json({message:"Error occured !!!"})
            }
            
        })
    }else{
        res.status(404).json({
            message:"This format is not allowed , please upload file with '.png','.gif','.jpg'"
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