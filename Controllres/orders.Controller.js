const orderService = require('../service/orderService');


// Get Orders - מנהל בלבד
const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get orders', error });
    }
};



// const getOrdersByServiceType=async(req,res)=>{
//     const serviceType = req.params.type;
//     try {
//          await orderService.getOrdersByServiceType(serviceType);
//         res.status(200).json(orders);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to get orders by this serviceType', error });
//     }
    


//}
// Add Order - למשתמש רגיל
const addOrder = async (req, res) => {
    try {
        const newOrder = await orderService.addOrder(req.body);
        res.status(200).json({ message: 'The order has been successfully added', newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add order', error });
    }
};


// Delete Order - מנהל בלבד
const deleteOrder = async (req, res) => {
    try {
        const orderPhone = req.params.phone;
        const deletedOrder = await orderService.deleteOrder(orderPhone);
        if (deletedOrder) {
            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete order', error });
    }
};



// Update Order - מנהל בלבד
const updateOrder = async (req, res) => {
    try {
        const orderPhone = req.params.phone;
        const updatedOrder = await orderService.updateOrder(orderPhone, req.body);
        if (updatedOrder) {
            res.status(200).json({ message: 'Order updated', updatedOrder });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update order', error });
    }
};




module.exports = {
    getOrders,
    // getOrdersByServiceType,
    addOrder,
    deleteOrder,
    updateOrder
    
};