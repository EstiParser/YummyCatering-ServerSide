const express = require('express');
const router = express.Router();

const usersController = require('../Controllres/users.Controller');

router.get('/getUsers',authorizeRole('admin'),usersController.getUsers);


module.exports = router;
