const db =  require('../models/index.model')
const Profile = db.profile
const Posts = db.posts


const add_post = async(req,res)=>{
    let profile = await Profile.findOne({
        where:{
            user_name:req.body.user_name
        }
    })
    if(profile){
        let post_data = await Posts.create({title:req.body.title,description:req.body.description,share_with:req.body.share_with,profile_id:profile.profile_id})
        if(post_data){
            res.status(200).json({
                message:"Data inserted successfully"
            })
        }else{
            res.status(404)
        }
    }else{
        res.status(400).json({message:"Please Sign up again"})
    }  
}

const all_posts = async(req, res)=>{
    let all_post = await Posts.findAll()
    if(all_post){
        res.status(200).json(all_post)
    }else{
        res.status(404).json({
            message:"no data not found"
        })
    }
}

const user_post = async(req, res)=>{
    let profile = await Profile.findOne({
        where:{
            user_name:req.body.user_name
        }
    })
    if(profile){
        let user_data = await Posts.findAll({
            where : {
                profile_id:profile.profile_id
            }
        })
        if(user_data){
            res.status(200).json(user_data)
        }else{
            res.status(404).json({
                message:"No Data Found !!!"
            })
        }
    }else{
        res.status(400).json({message:"Posts with this user doesn't exists"})
    }
}




module.exports = {add_post,all_posts,user_post}