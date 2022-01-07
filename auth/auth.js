const { verify } = require("jsonwebtoken")



module.exports = {
    checkToken : (req,res,next)=>{
        let token = req.get("authorization")
        if (token){
            token = token.slice(7)
            verify(token,process.env.TOKEN_ID,(err,decoded)=>{
                if(err){
                    res.json({
                        messsage:"Invalid Token"
                    })
                }else{
                    next()
                }
            })
        }else{
            res.json({
                message:"Access Denied Unothorized user"
            })
        }
    }
}