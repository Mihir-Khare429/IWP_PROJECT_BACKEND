const Candidate = require('../models/candidate');
const fs = require('fs');

const candidateRegistration = async(req,res) => {
    try{
        const body = req.body
        let candidate = new Candidate();
        candidate = {
            ...req.body
        }
        candidate.image.data = fs.readFileSync(req.files.userPhoto.path)
        candidate.image.contentType = 'image/png'
        candidate = await candidate.save();
        res.status(200).send({
            success : true,
            message : 'Candidate Registration Completed'
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = candidateRegistration