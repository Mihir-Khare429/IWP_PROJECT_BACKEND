const Candidate = require('../models/candidate');

const castVote = async(req,res) => {
    try{
        const body = req.body
        const email = body.email
        let candidate  = await Candidate.findOne({email})
        if(!candidate){
            return res.status(400).send({
                success : false,
                message : 'No Candidate Found'
            })
        }
        candidate.vote = candidate.vote++;
        candidate = await Candidate.updateOne({email},{vote : candidate.vote})
        res.status(400).send({
            success : true,
            message : 'Vote Stored'
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = castVote