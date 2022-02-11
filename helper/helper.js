const path = require("path")
const multer = require('multer');


const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const videoFilter = function(req, file, cb) {
    // accept videos Only
    if (!file.originalname.match(/\.(mp4|mkv)$/)){
        req.fileValidationError = 'Only video files are allowed!';
        return cb(new Error('Only video files are allowed!'), false);
    }
    cb(null, true);
    
}

const fileFilter = (req,file,cb)=>{
    if(file.fieldname === "upload image"){
        if(
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' || 
            file.mimetype === 'image/jpeg'
        ){
            cb(null,true)
        }else{
            cb(null,false)
        }
    }else{
        if(
            file.mimetype === 'application/pdf' ||
            file.mimetype === 'application/msword'
        ){
            cb(null,true)
        }else{
            cb(null,false)
        }
    }
}


const Storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/product_images');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: Storage });





module.exports = {Storage};