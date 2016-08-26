const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const LocationsSchema = new Schema({
  title: { type: String, required: true },
  body:  { type: String }
});


module.exports = mongoose.model('Locations', LocationsSchema);
