const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const LocationsSchema = new Schema({
  lat: { type: String, required: true },
  lng:  { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});


module.exports = mongoose.model('Locations', LocationsSchema);
