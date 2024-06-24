const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderDate: Date,
  time: String,
  serviceType:
  {
    type: String,
    services: ["wedding", "Bar Mitzvah", "engagement", "Bat mitzva", 'alliance']
  },
  customerName: String,
  phone: String,
  notes: String,
});
module.exports = mongoose.model('Order', OrderSchema);