const router = require('express').Router();
var multer = require('multer'); 
  
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, '../uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage }); 

const signUp = require('./signup');
const signIn = require('./signin');
const candidateRegistration = require('./candidateRegistration');

router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/candidate/signup',upload.single('image'),candidateRegistration)

module.exports = router