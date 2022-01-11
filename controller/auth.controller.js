const db =  require('../models/index.model')
const Profile = db.profile
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken")


const Signup = async(req,res)=>{
    try {
        let user = await Profile.findOne({ where: { email_id :req.body.email_id }})
        if (user) {
            res.json({
                message: "user already exist"
            })
        }else{
            let hash = await bcrypt.hash(req.body.password,10)
            let data = await Profile.create({display_name:req.body.display_name,user_name:req.body.user_name,
                password:hash,email_id:req.body.email_id,phone:req.body.phone,country:req.body.country})
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
    } catch (error) {
        console.log(error);
        res.json({
            message:"server error"
        })
    }
}

const Signin = async(req,res)=>{
    try {
        let data = await Profile.findOne({
            where:{
                user_name:req.body.user_name
            }
        })
        if(data){
            let validpass = await bcrypt.compare(req.body.password,data.password)
            if (validpass) {
                const jsontoken = sign({password : req.body.password},process.env.TOKEN_ID,
                    {expiresIn : "1h"})
                res.json({
                    message: "Sign in success !!!",
                    token : jsontoken
                })
            }else{
                res.json({
                    message: "Please check the credentials and try again"
                })
            }
        }else{
            res.json({
                message:"No Record present with this name kindly sign up !!!"
            })
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({
            message:"server error"
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

