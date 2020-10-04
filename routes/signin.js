const User = require('../models/user');

const signIn = async(req,res) => {
    try{
        const body = req.body
        const user = await User.findOne({email:body.email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'No User Registered with this email'
            })
        }
        if(user.password != body.password){
            return res.status(404).send({
                success:false,
                message:'Incorrect Password'
            })
        }
        return res.status(404).send({
            success:true,
            message:user
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = signIn