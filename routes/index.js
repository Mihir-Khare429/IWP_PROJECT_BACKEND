const router = require('express').Router();

const signUp = require('./signup');
const signIn = require('./signin');

router.post('/signup',signUp);
router.post('/signin',signIn);

module.exports = router