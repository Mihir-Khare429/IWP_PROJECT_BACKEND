const Candidate = require('../models/candidate');

const getVoteCount = async(req,res)=> {
    try{
        const votes = await Candidate.find({},{voteCount:1,name:1})
        res.status(200).send({
            success:true,
            message : votes
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = getVoteCount