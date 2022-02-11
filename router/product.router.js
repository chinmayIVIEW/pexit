const product_router = require("express").Router()
const multer = require('multer');
const {Storage} = require('../helper/helper')
const {add_product} = require('../controller/product.controller')



let upload = multer({ storage: Storage });


product_router.get('/add-product/:id',upload.fields([{
    name: 'upload_image', maxCount: 1
  }, {
    name: 'product_Details', maxCount: 1
  },{
    name: 'transaction_History',maxCount: 1
  },{
    name: 'upload',maxCount: 1
  },{
    name: 'company_Profile',maxCount: 1
  }]),add_product)





module.exports = product_router