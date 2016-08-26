const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const UsersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password_encrypted: { type: String, required: true },
  name: { type: String },
  age: { type: Number },
  gender: { type: String },
  state: { type: String },
  city: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
});


module.exports = mongoose.model('Users', UsersSchema);
