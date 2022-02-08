const db =  require('../models/index.model')
const Profile = db.profile
const Products = db.products


const add_product = async(req,res)=>{
    let profile = await Profile.findOne({
        where : {
            profile_id : req.params.id
        }
    })
    if(profile){

    }
}



module.exports = {add_product}