const router = require('express').Router();

const signUp = require('./signup');

router.post('/signup',signUp);

module.exports = router