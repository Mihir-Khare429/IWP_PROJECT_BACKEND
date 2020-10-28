const Candidate = require('../models/candidate');
const axios = require('axios');
const fs = require('fs');

const candidateRegistration = async(req,res) => {
    try{
        if(!req.verifyStatus || req.verifyStatus == false){
            return res.status(404).send({
                success:false,
                message:'Authentication Failed'
            })
        }
        let body = req.body
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