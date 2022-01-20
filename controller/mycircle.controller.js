const db =  require('../models/index.model')
const Profile = db.profile
const My_Circle = db.my_circle


const connect = async(req,res)=>{
    let profile = await Profile.findOne({
        where:{
            user_name : req.params.user_name
        }
    })
    if(profile){
        let connection_data = await My_Circle.create({
            connection_id : profile.profile_id,connection_status:true
        })
        if(connection_data){
            res.status(200).json({
                message:"connection added"
            })
        }else{
            res.status(404).json({
                message:"Can't connect"
            })
        }
    }else{
        res.json({message:"No Profile found !!!"})
    }
}




module.exports = connect