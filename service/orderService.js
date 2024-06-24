const Order = require('../models/Orders');

//מנהל
const getOrders = async () => {
    const orders = await Order.find();
    return orders;
};

//get by servicetype
// const getOrdersByServiceType=async(type)=>
//     {
//         const orders= await Order.findIndex(o=>o);
//         return orders;
//     }

const addOrder = async (orderData) => {
    const newOrder = new Order(orderData);
    await newOrder.save();
    return newOrder;
};

const deleteOrder = async (phone) => {
    const deletedOrder = await Order.findOneAndDelete({ phone });
    return deletedOrder;
};

const updateOrder = async (phone, data) => {
    const updatedOrder = await Order.findOneAndUpdate(
        { phone },
        data,
        { new: true }
    );
    return updatedOrder;
};





module.exports = {
    getOrders,
    // getOrdersByServiceType,
    addOrder,
    deleteOrder,
    updateOrder
    
};