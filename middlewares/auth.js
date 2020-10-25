require('dotenv').config();
const jwt = require('jsonwebtoken');

const authVerification = async function(req,res,next){
    try{
        const secret = process.env.SECRET
        console.log(req.body)
        if(!req.body.token){
            return res.status(404).send({
                success:false,
                message:'No token Provided'
            })
        }
        const verify = jwt.verify(req.body.token,process.env.SECRET)
        console.log(verify)
        if(!verify || !verify.verified){
            return res.status(404).send({
                success:false,
                message:'Authentication Failed'
            })
        }
        req.verifyStatus = true
        next()
    }catch(err){
        console.log(err)
    }
}

module.exports = authVerification