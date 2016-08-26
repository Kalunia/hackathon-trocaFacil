const mongoose = require('mongoose');
const Schema   = mongoose.Schema, 
	  ObjectId = Schema.ObjectId;


const JobsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: ObjectId, ref: 'UsersSchema' },
  location: { type: ObjectId, ref: 'LocationsSchema' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});


module.exports = mongoose.model('Jobs', JobsSchema);
