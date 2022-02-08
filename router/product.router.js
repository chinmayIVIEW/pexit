const product_router = require("express").Router()
const multer = require('multer');
const path = require("path")
const helpers = require('../helper/helper');





const Storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/product_images');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: Storage}).array('docs');



product_router.get('/add-product/:id',upload,)

module.exports = product_router