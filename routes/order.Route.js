const express = require('express');
const router = express.Router();

const orderController  = require('../Controllres/orders.Controller');

router.get('/',orderController.getOrders);
// router.get('/:type',orderController.getOrdersByServiceType)
router.post('/addOrder',orderController.addOrder);
router.put('/updateOrder/:phone',orderController.updateOrder);
router.delete('/deleteOrder/:phone',orderController.deleteOrder);


module.exports = router;