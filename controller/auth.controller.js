const db =  require('../models/index.model')
const Profile = db.profile
const { sign } = require("jsonwebtoken")


const Signup = async(req,res)=>{
    let user = await Profile.findOne({ where: { email_id :req.body.email_id }})
    if (user) {
        res.json({
            message: "user already exist"
        })
    }else{
        let data = await Profile.create({display_name:req.body.display_name,user_name:req.body.user_name,
            password:req.body.password,email_id:req.body.email_id,phone:req.body.phone,country:req.body.country})
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
}

const Signin = async(req,res)=>{
    let data = await Profile.findOne({
        where:{
            user_name:req.body.user_name,
            password:req.body.password
        }
    })
    if (data) {
        const jsontoken = sign({password : req.body.password},process.env.TOKEN_ID,
            {expiresIn : "1h"}
        )
        res.json({
            message: "Sign in success !!!",
            token : jsontoken
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
    }else{
        res.json({
            message:"Something went wrong"
        })
    }
}

const Logout = async(req,res) => {
    try {
        res.clearCookie()
    } catch (error) {
        res.status(500).send(error)
    }
}
 

module.exports = {Signup,Signin,delete_user,Logout}

