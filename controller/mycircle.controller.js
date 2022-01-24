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
            profile_id : profile.profile_id,connect_user:req.params.user,connection_status:false
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
    let connection_data = await My_Circle.findAll({
        where: {connection_status: true,
                profile_id : req.params.profile_id}
    })
    if(connection_data){
        let profile = await Profile.findOne({
            where:{
                profile_id : connection_data[0].dataValues.profile_id
            }
        })
        if(profile){
            res.json({
                username: profile.user_name,
                profession : profile.profession,
                country : profile.country
            })
        }else{
            res.send("No data found !!!")
        }
    }else{
        res.send("Error occured !!!")
    }
}

const pending_connection_count = async (req, res) => {
    let pending_data = await My_Circle.findAndCountAll({
        where : {
            connection_status : false,
            profile_id : req.params.id
        }
    })
    if(pending_data){
        res.status(200).json({total_count: pending_data.count})
    }else{
        res.status(404)
    }
}

const pending_connection = async (req, res) => {
    let pending_data = await My_Circle.findAll({
        where : {
            profile_id : req.params.id,
            connection_status : false
        }
    })
    if(pending_data){
        res.send(pending_data)
    }else{
        res.send("no data found !!!")
    }
}

const connection_state = async (req, res) => {
    let connection_data = await My_Circle.update({connection_status : true},
        {where :{profile_id :req.params.id}})
    if(connection_data){
        res.status(200).json({
            message : "connection added to your list"
        })
    }else{
        res.status(404).json({
            message : "Error occured !!!"
        })
    }
}


module.exports = {connect,my_connection,pending_connection_count,pending_connection,connection_state}