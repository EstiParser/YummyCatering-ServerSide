const express = require('express');
const router = express.Router();
const { authenticateToken,authorizeRole } = require('../midlleware/authAdmin&User');

const orderContoller  = require('../Controllres/orders.Controller');
router.use(authenticateToken);

router.post('/addOrder',authorizeRole('user'),orderContoller.addOrder);//
router.put('/updateOrder/:phone',authorizeRole('Reminds'),orderContoller.updateOrder);
router.delete('/deleteOrder/:phone',authorizeRole('Reminds'),orderContoller.deleteOrder);
router.get('/getOrders',authorizeRole('admin'),orderContoller.getOrders);


module.exports = router;
