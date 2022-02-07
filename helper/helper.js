const imageFilter = function(req, file, cb) {
    // Accept images only
    console.log(file);
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


module.exports = {imageFilter,videoFilter};