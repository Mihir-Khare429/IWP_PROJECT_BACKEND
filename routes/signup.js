const User = require('../models/user');

const signUp = async(req,res)=>{
    try{
        const body = req.body;
        let user = new User({
            ...body
        })
        await user.save()
        res.status(200).send({
            success : true,
            message : 'User Credentials Saved Successfully'
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = signUp
