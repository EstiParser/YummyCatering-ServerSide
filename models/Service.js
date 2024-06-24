const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  serviceType:
  {
    type: String,
    services: ["wedding", "Bar Mitzvah", "engagement", "Bat mitzva", 'alliance']
  },
  description: String,
  phoneManeger: String,

});
module.exports = mongoose.model('Service', ServiceSchema);