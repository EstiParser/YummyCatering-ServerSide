const express = require('express');
const router = express.Router();
const authController = require('../Controllres/authController');

router.post('/login',authController.login);//OK
router.post('/register',authController.register);//OK

module.exports = router;
