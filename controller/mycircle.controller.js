const db =  require('../models/index.model')
const Profile = db.profile
const My_Circle = db.my_circle


const connect = async(req,res)=>{
    let profile = await Profile.findOne({
        where:{
            user_name : req.body.user_name
        }
    })
    if(profile){
        let connection_data = await My_Circle.create({
            profile_id : profile.profile_id,connect_user:req.params.user,connection_status:true
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
        res.json({message:"Something went wrong !!!"})
    }
}

const my_connection = async(req,res)=>{
    connection_data = await My_Circle.findAll({
        where: {connection_status:true,
                profile_id : req.params.profile_id}
    })
    console.log(connection_data[0].dataValues.profile_id);
    res.send(connection_data)
    

}



module.exports = {connect,my_connection}