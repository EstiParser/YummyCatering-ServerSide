const express = require('express');
const router = express.Router();
const { authenticateToken,authorizeRole } = require('../midlleware/authAdmin&User');
const besinessDetailsController  = require('../Controllres/BusinessDetails.Controller');

// router.use(authenticateToken);

router.post('/updateDetails',authorizeRole('admin'),besinessDetailsController.updateDetails);
router.get('/getDetails',authorizeRole('user'),besinessDetailsController.getDetails);//OK


module.exports = router;
