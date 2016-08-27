const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const JobsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Locations' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});


module.exports = mongoose.model('Jobs', JobsSchema);
