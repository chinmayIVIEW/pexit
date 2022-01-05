const db =  require('../models/index.model')
const Profile = db.profile



const Createuser = async (req,res)=>{
    let data = await Profile.create({user_name:req.body.user_name,display_name:req.body.display_name,
        profession:req.body.profession,professional_role:req.body.professional_role,email_id:req.body.email_id,
        phone:req.body.phone,date_of_birth:req.body.date_of_birth,gender:req.body.gender,address:req.body.address,
        country:req.body.country,state:req.body.state,location:req.body.location,postal_location:req.body.postal_location,
        summery:req.body.summery})
    if(data){
        res.json({
            message:"data inserted successfully"
        })
    }else{
        res.json({
            message:"Something went wrong !!!"
        })
    }
}


const Signup = async(req,res)=>{
    let data = await Profile.create({display_name:req.body.display_name,user_name:req.body.user_name,
        password:req.body.password,email_id:req.body.email_id,phone:req.body.phone,country:req.body.country,profession:req.body.profession})
    if (data) {
        res.json({
            message: "Sign up success !!!"
        })
    }else{
        res.json({
            message: "Oops !! Something went wrong"
        })
    }
}

const Signin = async(req,res)=>{
    let data = await Profile.findOne({
        where:{
            user_name:req.body.user_name,
            password:req.body.password
        }
    })
    if (data) {
        res.json({
            message: "Sign in success !!!"
        })
    }else{
        res.json({
            message: "Please check the credentials and try again"
        })
    }
}

const delete_user = async(req,res)=>{
    let data = await Profile.destroy({
        where : {
            profile_id : req.params.id
        }
    })
    if(data){
        res.json({
            message:"User deleted !!!"
        })
    }
}

// social auth controller

const google_signin = (req,res)=>{
    let token = req.body.token
    res.cookie('session-token',token)
    res.send("success")
}

const google_logout = (req,res)=>{
    res.clearCookie('session-token')
    res.redirect('/social/signin')
}

module.exports = { Signup,Signin,delete_user,google_signin,google_logout }