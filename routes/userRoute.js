const express = require('express');
const router = express.Router();

const userController = require('../Controllres/users.Controller');

router.get('/getUsers',authorizeRole('admin'),userController.getUsers);


module.exports = router;