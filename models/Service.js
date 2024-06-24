const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    serviceName:  {
      type: String,
      services: ["wedding", "Bar Mitzvah", "engagement", "Bat mitzva", 'alliance']
    },
    description: String,
    price: Number,
    //phone: Number,
    // duration: String,
  });
  module.exports = mongoose.model('Service', ServiceSchema);
  

