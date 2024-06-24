const Orders = require('../models/Orders');

// Add Order - למשתמש רגיל
const addOrder = async (req, res) => {
    const newOrder = new Orders(req.body);
    await newOrder.save();
    res.status(200).json({ message: 'The order has been successfully added', newOrder });
};

// Update Order - מנהל בלבד
const updateOrder = async (req, res) => {
    const orderPhone = req.params.phone;
    const data = req.body;
    const updatedOrder = await Orders.findOneAndUpdate(
        { phone: orderPhone },
        data,
        { new: true }
    );
    if (updatedOrder) {
        res.status(200).json({ message: 'Order updated', updatedOrder });
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};


// Delete Order - מנהל בלבד
const deleteOrder = async (req, res) => {
    const orderPhone = req.params.phone;
    const deletedOrder = await Orders.findOneAndDelete({ phone: orderPhone });
    if (deletedOrder) {
        res.status(200).json({ message: 'Order deleted successfully' });
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

// Get Orders - מנהל בלבד
const getOrders = async (req, res) => {
    const orders = await Orders.find();
    res.status(200).json(orders);
};

module.exports = {
    addOrder,
    updateOrder,
    deleteOrder,
    getOrders
};
