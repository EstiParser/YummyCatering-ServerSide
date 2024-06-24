const express = require('express');
const router = express.Router();
// const { authenticateToken,authorizeRole } = require('../midlleware/authAdmin&User');
const businessController  = require('../Controllres/BusinessDetails.Controller');

// router.use(authenticateToken);

router.put('/updateDetails',businessController.updateDetails);
router.get('/',businessController.getDetails);


module.exports = router;