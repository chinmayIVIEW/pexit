const db =  require('../models/index.model')
const Profile = db.profile
const Products = db.products
const multer = require('multer');
const {upload} = require('../helper/helper')

const add_product = async(req,res)=>{
    let profile = await Profile.findOne({
        where : {
            profile_id : req.params.id
        }
    })
    if(profile){
        upload()
        let product_data = await Products.create({
            upload_image:req.files.upload_image[0].filename,name:req.body.name,location:req.body.location,category:req.body.category,product_details:req.files.product_details[0].filename,
            transaction_history : req.files.transaction_History[0].filename,product_condition:req.body.product_condition,description:req.body.description,upload:req.files.upload[0].filename,
            company_profile : req.files.company_profile [0].filename , profile_id:profile.profile_id
        })
        if(product_data){
            res.status(200).json({
                message:"product added"
            })
            }else{
                res.status(404).json({
                    message:"Something wrong !!!"
                })
            }
    }else{
        res.status(404).json({
            message:"user not found !!!"
        })
    }
}

 
module.exports = {add_product}