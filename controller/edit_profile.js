const db =  require('../models/index.model')
const Profile = db.profile
const Experience = db.experience
const Education = db.education


const edit_profile = async(req,res)=>{
    let user_data = await Profile.create({
        profession : req.body.profession,professional_role:req.body.professional_role,phone: req.body.phone,date_of_birth:req.body.date_of_birth,
        gender : req.body.gender,address:req.body.address,country:req.body.country,state:req.body.state,location:req.body.location,postal_location:req.body.postal_location,
        summery:req.body.summery
    })
    if(user_data){
        res.status(200)
    }else{
        res.status(404)
    }
}

const get_profile = async(req,res)=>{
    let user_data = await Profile.findAll()
    if(user_data){
        res.json({
            user_data
        })
    }else{
        res.json({
            message:"something gone wrong !!!"
        })
    }
}

const edit_experience = async(req,res)=>{
    let profile = await Profile.findOne({
        where:{
            user_name:req.body.user_name
        }
    })
    if(profile){
        let user_exp = await Experience.create({
            company_name:req.body.company_name,title:req.body.title,location: req.body.location,
            time_period:req.body.time_period,description:req.body.description,profile_id:profile.profile_id
        })
        if(user_exp){
            res.json({
                message:"data inserted"
            })
        }else{
            res.send("some error eccoured")
        }
    }
}

const get_experience = async(req,res)=>{
    let exp_data = await Experience.findAll()
    if(exp_data){
        res.json(exp_data)
    }else{
        res.json({
            message:"no data not found"
        })
    }
}

const edit_education = async(req,res)=>{
    let profile = await Profile.findOne({
        where:{
            user_name:req.body.user_name
        }
    })
    if(profile){
        let user_edu = await Education.create({
            school:req.body.school,date_attended:req.body.date_attended,degree: req.body.degree,mode_of_study:req.body.mode_of_study,
            field_of_study: req.body.field_of_study,activity_and_societies:req.body.activity_and_societies,description:req.body.description,profile_id:profile.profile_id
        })
        if(user_edu){
            res.json({
                message:"data inserted"
            })
        }else{
            res.send("some error eccoured")
        }

    }
}

const get_education = async(req,res)=>{
    let edu_data = await Education.findAll()
    if(edu_data){
        res.json(edu_data)
    }else{
        res.json({
            message:"no data not found"
        })
    }
}


module.exports = {edit_profile,get_profile,edit_experience,get_experience,edit_education,get_education}