const Candidate = require('../models/candidate');
const axios = require('axios');
const fs = require('fs');

const candidateRegistration = async(req,res) => {
    try{
        const body = req.body
        var candidate = new Candidate({
            ...body,
            image:req.file.location
        });
        await candidate.save();
        res.status(200).send({
            success : true,
            message : 'Candidate Registration Completed'
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = candidateRegistration