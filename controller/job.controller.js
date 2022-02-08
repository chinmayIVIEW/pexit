const db =  require('../models/index.model')
const Profile = db.profile
const Jobs = db.jobs


const create_jobs = async (req,res)=>{
    let profile = await Profile.findOne({
        where : {
            profile_id : req.params.id
        }
    })
    if(profile && req.file == !undefined){
        let job_data = await Jobs.create({
            logo : req.file.filename , job_title : req.body.job_title , company : req.body.company , country:req.body.country , state : req.body.state,
            city : req.body.city , postal_code : req.body.postal_code , job_function : req.body.job_function , employee_type : req.body.employee_type,
            company_industry : req.body.company_industry , seniority_level : req.body.seniority_level , job_description : req.body.job_description ,
            company_description : req.body.company_description , mode_of_apply : req.body.mode_of_apply , profile_id : profile.profile_id
        })
        if(job_data){
            res.status(200).json({
                message:"job added"
            })
            }else{
                res.status(404).json({
                    message:"Something wrong !!!"
                })
            }
    }else{
        res.status(404).json({
            message:"please upload you logo"
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