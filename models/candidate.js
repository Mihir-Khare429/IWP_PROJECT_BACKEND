const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    organizationName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10,
        unique:true
    },
    about:{
        type:String,
        required:true
    },
    voteCount:{
        type:Number,
        default:0
    },
    image:{
        type:Buffer,
        contentType:String
    }
})

module.exports = mongoose.model('candiadate',candidateSchema)