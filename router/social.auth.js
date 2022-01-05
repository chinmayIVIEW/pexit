const router = require("express").Router()
const {google_signin,google_logout} = require("../controller/auth.controller")

// Google Auth
const {OAuth2Client} = require('google-auth-library'); 
const CLIENT_ID = process.env.CLIENT_ID
const client = new OAuth2Client(CLIENT_ID);

// googal sign in
router.get('/signin',(req,res)=>{
    res.render('login')
})
router.post('/signin',google_signin)
router.get('/logout',google_logout)

function checkAuthentication(req, res,next) {
    let token = req.cookies['session-token']
    let user = {}

    async function  verify(){
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience:CLIENT_ID
        })
        const payload = ticket.getPayload()
        user.name = payload.name
        user.email = payload.email
        user.picture = payload.picture
    }
    verify()
    .then(()=>{
        req.user = user
        next()
    })
    .catch(err=>{
        res.redirect('/social/signin')
    })
}



module.exports = {router,checkAuthentication}
